import './SearchMovie.css';
import Navbar from './../../Components/NavBar/NavBar'

import { BiSearchAlt,BiSolidChevronLeft ,BiSolidChevronRight   } from "react-icons/bi";
import { setMovieSearch } from '../../Components/NavBar/components/SearchBtn';

import  api  from '../../Components/Functions/SearchMovie';
import { SearchMoviePages } from '../../Components/Functions/SearchMoviePages';


import { useState } from 'react';

var MoviesPages = 0
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

        if(Object.keys(Topics).length > 0){
            return
        }

        const response = await api.get(`?s=${MovieName}&apikey=c74f3650&page=${MovieSearchPage}`);
        SetTopics(response.data.Search)
        PagesCount()    

    }
    setTimeout(StartSearchMovie,10)
    

    function TopicsBox({item}){

        return <div className="MovieCard">
                    <img  alt={' image: '+  item.Title} src={item.Poster}/>
                    <span>{item.Title}</span>
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
                <div className='TitlesMovies'>
                    <h1 id='MovieNameId'></h1> <BiSearchAlt  size={30}/>
                </div>
                <div id='list-movies' className='ListMovies'>
                    {Topics.map((Topics, index) => <TopicsBox item={Topics} />)}
                </div>
                <div className='MovieListOtions'>
                    <div>{PagesControl.map((PagesControl, index) => <PagesControlBox item={PagesControl} />)}</div>
                    <span>{MovieSearchPage}/{MoviesPages}</span>
                </div>
            </main>
        </>
    );
  }
  
  export default SearchMoviePage;
  