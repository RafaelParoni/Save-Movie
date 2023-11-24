import './Details.css';
import Navbar from './../../Components/NavBar/NavBar'


// import function Details movie search
import { DetailsMovieSearch } from '../../Components/Functions/DetailsMovie';
import { TrailerMovieSearch } from '../../Components/Functions/TrailerMoveSearch';
import { StremingSearch } from '../../Components/Functions/StremingSearch';
import { SaveMovie } from '../../Components/Functions/SaveMovie';
import { TestSaveMovie } from '../../Components/Functions/TestSaveMovie';

// import images

import ErrorImage from './../../Images/404.png'


import { useState } from 'react';

import { BiSad, BiMessageAltDetail, BiMehBlank, BiConfused, BiBookmarkPlus, BiBookmarkAltMinus   } from "react-icons/bi";



function DetailsPage() {

    const urlParams = new URLSearchParams(window.location.search);
    var MovieId = urlParams.get("d")
    const [Details, setDetails] = useState([])
    const [Trailer, setTrailer] = useState([])
    const [Generos, setGeneros] = useState([])
    const [Services, setService] = useState([])
    const [SavesMovie, setSaveMovie] = useState('')

    async function validation(){
        if(MovieId === '' || MovieId === null){ // Verifcação de Id na URL /details?d=(???????) ou /details(????) =* /details?d=tt4154664
            console.log('cade o id?')
            return
        }
        if(Object.keys(Details).length > 0){return} // Verificação se já existe alguma coisa em Details
        var Services = []
        var DetailsObj = []
        var Trailer = []
        var genre = []
        var BtnSave = true
        console.log('teste')
        await DetailsMovieSearch(MovieId).then(function(result){
            console.log(result.results)

            var banner = ''
            if(result.results.primaryImage === null){
                banner = ErrorImage
            }else{
                banner = result.results.primaryImage.url
            }
            DetailsObj.push({
                id: result.results.id, 
                name: result.results.titleText.text,
                banner: banner,
                plot: result.results.plot.plotText.plainText,
                lenguage: result.results.plot.language.id,
            })
            genre = result.results.genres.genres

        })
        await TrailerMovieSearch(MovieId).then(function(result){
            if(result.results.trailer !== undefined){
                Trailer ={trailerType: result.results.trailer}
            }else{
                Trailer = {trailerType: 'NotFound'}
            }
        })
        await StremingSearch(MovieId).then(function(result){
            if(result.name === 'AxiosError'){
                Services = 'NotFound'
                return
            }
            if(result.data.result.streamingInfo.pt.length === 0 || result.code === "ERR_BAD_REQUEST"){
                Services = 'NotFound'
            }else{
                var ServicesObj = []
                var x = 0
                while( x < result.data.result.streamingInfo.pt.length){

                    ServicesObj.push({
                        service: result.data.result.streamingInfo.pt[x].service,
                        link: result.data.result.streamingInfo.pt[x].link,
                        })
                    x++
                }

                Services = {ServicesObj}
            }
        })
        await TestSaveMovie(MovieId).then(function(result){
            if(result === false){
                BtnSave = false
            }
        })
        setService(Services.ServicesObj)
        setDetails(DetailsObj)
        setTrailer(Trailer)
        setGeneros(genre)
        setSaveMovie(BtnSave)

    }
    setTimeout(validation,10)

    function GenreDisplay({item}){
        return (
            <div className='genre'> {item.text} </div>
        )
    }

    function ServicesDisplay({item}){
        return (
            <button className='serviceBtn' onClick={()=> window.open(item.link) }>{item.service}</button>
        )
    }



    return (
        <>
            <Navbar/>
            <main className='DetailsPage'>
                <div className='DetailsMovieDiv'>
                    {Object.keys(Details).length === 0 && (<div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>)}
                    {Object.keys(Details).length > 0 && (
                        <>
                            <h1>{Details[0].name}</h1>
                            <div className='MovieInfo'>
                                <div className='MoviePoster'>
                                    <img alt={'Image: '+ Details[0].name} src={Details[0].banner} width={200}/>
                                </div>
                                <div className='MoviePlot'>
                                    <span> <BiMessageAltDetail/> {Details[0].plot}</span>
                                    <p>Genres</p>
                                    <div className='genre-list'>{Generos.map((Generos) => <GenreDisplay item={Generos} />)}</div>
                                </div>
                            </div>
                            <div className='MovieTrailer'>
                                <span>Trailer:</span>
                                {Trailer.trailerType === 'NotFound' && (
                                    <div className='TrailerNotFound'> 
                                        <h2><BiSad/> Trailer NotFound</h2>
                                    </div>
                                        
                                )}
                                {Trailer.trailerType !== 'NotFound' && (
                                    <iframe title='teste' src={Trailer.trailerType} width="100%" height="300" >
                                    
                                    </iframe>
                                )}
                            </div>
                            <span>Services:</span>
                            {Services === 'NotFound' && (
                                <div className='StremingMovieNotFound'>
                                    <h1><BiMehBlank/>Not found</h1>
                                </div>
                             )}
                             {Services !== 'NotFound' && (
                                 <div className='StremingMovie'>
                                    {Services.map((Services) => <ServicesDisplay item={Services} />)}
                                 </div>
                             )}
                             <h4>Save Movie:</h4>
                             {window.sessionStorage.getItem('session') !== null && (
                                <>
                                    {SavesMovie === false && (<button className='BtnSaveMovie' onClick={()=> {SaveMovie(Details[0].name, Details[0].id, Details[0].banner); setSaveMovie(true)}}> <BiBookmarkPlus/> Salvar</button>)}
                                    {SavesMovie === true && (<button className='BtnSaveMovie' onClick={()=> {SaveMovie(Details[0].name, Details[0].id, Details[0].banner); setSaveMovie(false)}}> <BiBookmarkAltMinus/> Deletar</button>)}
                                </>

                             )}
                             {window.sessionStorage.getItem('session') === null && (
                                <div id='History-NoSession' className='History-Error'>
                                    <h2><BiConfused/> No sessions connected </h2>
                                    <span>Try logging in <a href='/login'>here</a></span>
                                </div>
                             )}
                        </>
                    )}
                </div>
            </main>
        </>
    );  
  }
  
  export default DetailsPage;