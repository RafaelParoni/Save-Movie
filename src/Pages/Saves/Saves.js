// Imports Style Page
import './Saves.css';

// import NavBar
import Navbar from './../../Components/NavBar/NavBar' 


// import icons 
import { BiLinkExternal , BiBookmarkMinus, BiDownload, BiConfused   } from "react-icons/bi";

// import components
import { SaveMovie } from '../../Components/Functions/SaveMovie';
import { DownloadBanner } from '../../Components/Functions/DownloadBanner';
import { SearchSavesList } from '../../Components/Functions/SearchSavesList';


import { useState } from 'react';


var loading = false

function SavesPage() {

    function LinkMovie(MovieID){
        window.location = '/details?d=' + MovieID
    }

    const [MoviesList, setMoviesList] = useState([])
    async function SearchMovies(){
        if(window.sessionStorage.getItem('session') !== 'on'){
            loading = false
            return
        }
        var listMovies = []
        if(Object.keys(MoviesList).length > 0){
            return
        }
        await SearchSavesList().then(function(result){
            listMovies = result
        })
        setMoviesList(listMovies)
        loading = false
    }
    setTimeout(SearchMovies,10)

    function MovieListDisplay({movie}){

        return (
            <div className='Movie'>
                <img src={movie.poster} alt={movie.name}/>
                <span><b>{movie.name}</b></span>
                <div className='functionsMovie'>
                    <button onClick={()=> LinkMovie(movie.id)} className='HoverBtn'><BiLinkExternal />  <span className='HoverSpan'>  Open details Movie </span></button>
                    <button onClick={()=> SaveMovie(movie.name, movie.id, movie.poster)} className='HoverBtn'><BiBookmarkMinus/>  <span className='HoverSpan'>  Remove Movie in save </span></button>
                    <button onClick={()=> DownloadBanner(movie.poster, movie.name)} className='HoverBtn'><BiDownload/> <span className='HoverSpan'> Download banner </span></button>
                </div>
            </div> 
        )
    }

    return (
        <main className='SavesPage'>
            <Navbar/>
            <div  className='content'>
                <h2>Saved Movies</h2>
                <div className='ListMoviesSaves'>
                    {MoviesList.map((MoviesList) => <MovieListDisplay movie={MoviesList} />)}
                </div>
                {window.sessionStorage.getItem('session') !== 'on' && (
                    <div id='History-NoSession' className='History-Error'>
                        <h2><BiConfused/> No sessions connected </h2>
                    <span>Try logging in <a href='/login'>here</a></span>
                </div>
                )}
                {loading === true && (
                    <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                )}
            </div>
        </main>
    );
  }
  
  export default SavesPage;