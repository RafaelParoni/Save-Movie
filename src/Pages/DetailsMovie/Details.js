import './Details.css';


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
import { SiApple, SiNetflix, SiPrime, SiHbo, SiHulu, SiStarz, SiShowtime, SiMubi, SiNow      } from "react-icons/si";
import { TbBrandDisney,TbError404  } from "react-icons/tb";




function DetailsPage() {

    var Language = {

        NoSession: 'No sessions connected ',
        NoSessionDescription: 'Try logging in ',


        serivceNotFound: 'Services not found',
        trailerNotFound: 'Trailer not found',

        here: 'Here',

        genres: 'Genres:',
        Services: 'Services:',

        saveMovie1: 'Do you want to save ',
        saveMovie2: ' in your account? ',

        deletMovie1: 'Do you want to delete ',
        deletMovie2: ' from your account?',
   
    }
    
    function setLanguage(){
        if(window.location.pathname.includes("/pt/")){
            Language = {

                NoSession: 'Nenhuma conta conectada',
                NoSessionDescription: 'Tente fazer login por ',


                serivceNotFound: 'Serviços não encontrados',
                trailerNotFound: 'Trailer não encontrado',

                here: 'Aqui',

                genres: 'Gêneros:',
                Services: 'Serviços:',

                saveMovie1: 'Deseja Salvar ',
                saveMovie2: 'em sua conta? ',
        
                deletMovie1: 'Deseja Deletar ',
                deletMovie2: 'em sua conta? ',
               
            }
        }
    }
    setLanguage()

    const urlParams = new URLSearchParams(window.location.search);
    var MovieId = urlParams.get("d")
    const [Details, setDetails] = useState([])
    const [Trailer, setTrailer] = useState([])
    const [Generos, setGeneros] = useState([])
    const [Services, setService] = useState({})
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
        await DetailsMovieSearch(MovieId).then(function(result){

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
            if(result.name === "AxiosError" || Object.keys(result.data.result.streamingInfo).length === 0 || result.data.result.streamingInfo.us.length === 0 || result.code === "ERR_BAD_REQUEST" ){
                Services = 'NotFound'
            }else{
                // array = {
                // }
                
                // array["netflix"] = ["outro oi"]
                // array["prime"] = ["outro oi"]
                
                // var a = Object.keys(array)
                // a.forEach((chave) => console.log(chave, array[chave]))
                 
                // array["netflix"] = [array["netflix"],["oi"]]
                
                
                // a.forEach((chave) => console.log(chave, array[chave]))


                var servicesObj = {}

                result.data.result.streamingInfo.us.forEach(element => {
                    servicesObj[element.service] = element.link
                });


                Services = servicesObj
            }
        })
        await TestSaveMovie(MovieId).then(function(result){
            if(result === false){
                BtnSave = false
            }
        })

        if(Services === 'NotFound'){
            setService(Services)

        }else{
            setService(Services)

        }
        setDetails(DetailsObj)
        setTrailer(Trailer)
        setGeneros(genre)
        setSaveMovie(BtnSave)


    }
    setTimeout(validation,10)

    function GenreDisplay({item}){
        return (
            <div className='genre' key={item.text}> {item.text} </div>
        )
    }

    function ServicesDisplay({item}){
        var NameService = ''
        var IconService = ''
        switch(item.service){
            case 'netflix':
                NameService = ' Netflix'
                IconService = <SiNetflix/>
            break
            case 'prime':
                NameService = ' Prime'
                IconService = <SiPrime/>
            break
            case 'disney':
                NameService = ' Disney+'
                IconService = <TbBrandDisney/>
            break
            case 'hbo':
                NameService = ' HBO Max'
                IconService = <SiHbo/>
            break
            case 'hulu':
                NameService = ' Hulu'
                IconService = <SiHulu/>
            break
            case 'peacock':
                NameService = ' Peacock'
                IconService = <TbError404/>
            break
            case 'paramount':
                NameService = ' Paramount+'
                IconService = <TbError404/>
            break
            case 'starz':
                NameService = ' Starz'
                IconService = <SiStarz/>
            break
            case 'showtime':
                NameService = ' Showtime'
                IconService = <SiShowtime/>
            break
            case 'apple':
                NameService = ' Apple'
                IconService = <SiApple/>
            break
            case 'mubi':
                NameService = ' Mubi'
                IconService = <SiMubi/>
            break
            case 'stan':
                NameService = ' Stan'
                IconService = <TbError404/>
            break
            case 'now':
                NameService = ' Now'
                IconService = <SiNow/>
            break
            case 'crave':
                NameService = ' Crave'
                IconService = <TbError404/>
            break
            case 'all4':
                NameService = ' All 4'
                IconService = <TbError404/>
            break
            case 'iplayer':
                NameService = ' BBC iPlayer'
                IconService = <TbError404/>
            break
            case 'britBox':
                NameService = ' BritBox'
                IconService = <TbError404/>
            break
            case 'hotstar':
                NameService = ' Hotstar'
                IconService = <TbError404/>
            break
            case 'zee5':
                NameService = ' Zee5'
                IconService = <TbError404/>
            break
            case 'curiosity':
                NameService = ' Curiosity Stream'
                IconService = <TbError404/>
            break
            case 'wow':
                NameService = ' Wow'
                IconService = <TbError404/>
            break
            default: 
                NameService = item.service
                IconService = <TbError404/>
            break
        }
        return (
            <button className='serviceBtn' key={item.service} onClick={()=> window.open(item.link) }>{IconService}{NameService}</button>
        )
    }

    function confirmSaveMovie(movie){
        if(!window.confirm(Language.saveMovie1 + movie.name + Language.saveMovie2)){return}
        SaveMovie(movie.name, movie.id, movie.banner, '1');
        setSaveMovie(true)
    }
    function confirmDeletMovie(movie){
        if(!window.confirm(Language.deletMovie1 + movie.name + Language.deletMovie2)){return}
        SaveMovie(movie.name, movie.id, movie.banner, '2');
        setSaveMovie(false)
    }




    
    return (
        <>
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
                                    <p>{Language.genres}</p>
                                    <div className='genre-list'>{Generos.map((genero) => <GenreDisplay key={genero.text} item={genero} />)}</div>
                                </div>
                            </div>
                            <div className='MovieTrailer'>
                                <span>Trailer:</span>
                                {Trailer.trailerType === 'NotFound' && (
                                    <div className='TrailerNotFound'> 
                                        <h2><BiSad/> {Language.trailerNotFound}</h2>
                                    </div>
                                        
                                )}
                                {Trailer.trailerType !== 'NotFound' && (
                                    <iframe title='teste' src={Trailer.trailerType} width="100%" height="300" >
                                    
                                    </iframe>
                                )}
                            </div>
                            <span>{Language.Services}</span>
                            {Services === 'NotFound' && (
                                <div className='StremingMovieNotFound'>
                                    <h1><BiMehBlank/>{Language.serivceNotFound}</h1>
                                </div>
                             )}
                             {Services !== 'NotFound' && (
                                 <div className='StremingMovie' >
                                    {Object.entries(Services).map(([key, value]) => 
                                            <ServicesDisplay key={key} item={{service: key, link: value}} />
                                        )}
                                 </div>
                             )}
    
                             <h4>Save Movie:</h4>
                             {window.sessionStorage.getItem('session') !== null && (
                                <>
                                    {SavesMovie === false && (<button className='BtnSaveMovie' onClick={()=> confirmSaveMovie(Details[0])}> <BiBookmarkPlus/> To save</button>)}
                                    {SavesMovie === true &&  (<button className='BtnSaveMovie' onClick={()=> confirmDeletMovie(Details[0])}> <BiBookmarkAltMinus/> Delete</button>)}
                                </>

                             )}
                             {window.sessionStorage.getItem('session') === null && (
                                <div id='History-NoSession' className='History-Error'>
                                    <h2><BiConfused/> {Language.NoSession} </h2>
                                    <span>{Language.NoSessionDescription} <a href='/login'>{Language.here}</a></span>
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