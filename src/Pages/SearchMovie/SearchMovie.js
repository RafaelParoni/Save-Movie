import './SearchMovie.css';
import Navbar from './../../Components/NavBar/NavBar'

import { BiSearchAlt,BiSolidChevronLeft ,BiSolidChevronRight,BiGhost,BiInfoSquare     } from "react-icons/bi";
import { setMovieSearch } from '../../Components/NavBar/components/SearchBtn';

import  api  from '../../Components/Functions/SearchMovie';
import { SearchMoviePages } from '../../Components/Functions/SearchMoviePages';


import { useState } from 'react';

var MoviesPages = 0
var ErrorSearch = false
function SearchMoviePage() {
    const [Topics , SetTopics] = useState([])
    const [PagesControl, setPagesControl] = useState([])
    const urlParams = new URLSearchParams(window.location.search);
    const MovieName = urlParams.get("m")
    var MovieSearchPage = urlParams.get("page")
    if(MovieSearchPage === undefined || isNaN(MovieSearchPage) || MovieSearchPage === '' || MovieSearchPage === null){
        MovieSearchPage = 1
    }
    
    async function StartSearchMovie(){
        setMovieSearch(MovieName)
        document.getElementById('MovieNameId').innerHTML = MovieName

        await SearchMoviePages(MovieName).then(function(results){
            MoviesPages = results
        })

        if(Object.keys(Topics).length > 0 || ErrorSearch === true){
            return
        }


        const response = await api.get(`?s=${MovieName}&apikey=c74f3650&page=${MovieSearchPage}&type=movie`);

        if(response.data.Response === 'False'){
            document.getElementById('list-movies').style.display = 'none'
            document.getElementById('list-movies-control').style.display = 'none'
            document.getElementById('error-search-movie').style.display = 'flex'
            if(MovieSearchPage > MoviesPages){
                document.getElementById('error-value').innerText = 'Page not found'
            }else{
                document.getElementById('error-value').innerText = response.data.Error
            }
            ErrorSearch = true
            return
        }else{
            document.getElementById('error-search-movie').style.display = 'none'
            SetTopics(response.data.Search)
            PagesCount()    
        }

    }
    setTimeout(StartSearchMovie,10)
    

    function TopicsBox({item}){

        return <div className="MovieCard">
                    <img  alt={''} src={item.Poster}/>
                    <span><b> {item.Title} </b></span>
                </div>
    }

    function PagesCount(){
        var ControlObj = []
        var FirstPage = 1
        var PageAtual = parseInt(MovieSearchPage)
        var PageAnterior = parseInt(MovieSearchPage) -1
        var PageSeguinte = parseInt(MovieSearchPage) + 1
        var LastPage = parseInt(MoviesPages)
        ControlObj.push(
            {FirstPage: FirstPage}
        )

        if(PageAnterior < FirstPage){ // LeftControl validation!
            // Não adiciona Seta para a esquerda! LeftControl = false
        }else{

            // Adiciona Seta para a esquerda! LeftControl = true
            ControlObj.push(
                {LeftControl: '<', proxPage: PageAnterior}
            )
        }
    
        if(PageAtual === FirstPage){
            //console.log('Pagina atual: | ' + PageAtual +' |')
        }else{
            ControlObj.push(
                {PageNumber: PageAnterior }, {PageNumber: PageAtual}
            )
        }
        
        if(PageSeguinte > LastPage){

        }else{

            ControlObj.push(
                {PageNumber: PageSeguinte}, {RightControl: '>', proxPage: PageSeguinte}, {LastPage: LastPage}
            )
        }
        setPagesControl(ControlObj)

    }

    function PagesControlBox({item}){
        document.getElementById('list-movies-control').style.display = 'flex'
        var value = 't'
        var FunctionValue = 0
        if(item.FirstPage !== undefined){
            value = item.FirstPage
            FunctionValue = item.FirstPage
        }
        if(item.LeftControl !== undefined){
            value = <BiSolidChevronLeft />
            FunctionValue =  item.proxPage
        }
        if(item.PageNumber){
            value =  item.PageNumber
            FunctionValue =  item.PageNumber
        }
        if(item.LastPage !== undefined){
            value = item.LastPage
            FunctionValue =  item.LastPage
        }
        if(item.RightControl !== undefined){
            value = <BiSolidChevronRight/>
            FunctionValue =  item.proxPage
        }
        return <button onClick={()=> NewPage(FunctionValue)}>{value}</button>
    }
    function NewPage(value){
        window.location.search = '?m=' + MovieName + '&page=' + value
    }
    return (
        <>
            <Navbar/>
            <main className='SearchPage'>
                <div className='TitlesMovies'><h1 id='MovieNameId'>Movie Name</h1> <BiSearchAlt  size={30}/></div>
                <div id='list-movies' className='ListMovies'>
                    {Topics.map((Topics) => <TopicsBox item={Topics} />)}
                </div>
                <div id='list-movies-control' className='MovieListOtions'>
                    <div>{PagesControl.map((PagesControl) => <PagesControlBox item={PagesControl} />)}</div>
                    <span>{MovieSearchPage}/{MoviesPages}</span>
                </div>
                <div id='error-search-movie' className='ErrorDiv'>
                    <h1> <BiInfoSquare /> Error 404</h1>
                    <h2><BiGhost/> <span id='error-value'></span> </h2>
                </div>
            </main>
        </>
    );
  }
  
  export default SearchMoviePage;
  