import './SearchMovie.css';
import Navbar from './../../Components/NavBar/NavBar'

import { BiSearchAlt } from "react-icons/bi";

import { setMovieSearch } from '../../Components/NavBar/components/SearchBtn';

import  api  from '../../Components/Functions/SearchMovie';
import { SearchMoviePages } from '../../Components/Functions/SearchMoviePages';


import { useState } from 'react';

var MoviesPages = 0
function SearchMoviePage() {
    const [Topics , SetTopics] = useState([])
    const urlParams = new URLSearchParams(window.location.search);
    const MovieName = urlParams.get("m")
    var MovieSearchPage = urlParams.get("page")
    if(MovieSearchPage === undefined || isNaN(MovieSearchPage)){
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
      


    }
    setTimeout(StartSearchMovie,10)
    

    function TopicsBox({item}){
        console.log(item)
        return <div className="MovieCard">
                    <img  alt={' image: '+  item.Title} src={item.Poster}/>
                    <span>{item.Title}</span>
                </div>
    }

    return (
        <>
            <Navbar/>
            <main className='SearchPage'>
                <div className='TitlesMovies'>
                    <h1 id='MovieNameId'>Movie name</h1> <BiSearchAlt  size={30}/>
                </div>
                <div id='list-movies' className='ListMovies'>
                    {Topics.map((Topics, index) => <TopicsBox item={Topics} />)}
                </div>
            </main>
        </>
    );
  }
  
  export default SearchMoviePage;
  