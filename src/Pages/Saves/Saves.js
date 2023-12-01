// Imports Style Page
import './Saves.css';



// import icons 
import { BiLinkExternal , BiBookmarkMinus, BiDownload, BiConfused   } from "react-icons/bi";

// import components
import { SaveMovie } from '../../Components/Functions/SaveMovie';
import { DownloadBanner } from '../../Components/Functions/DownloadBanner';
import { SearchSavesList } from '../../Components/Functions/SearchSavesList';


import { useState } from 'react';


var loading = false

function SavesPage() {

    var Language = {
        TitlePage: 'Save Movies',
        Nosessions: 'No sessions connected',
        NoSession: 'No sessions connected ',
        NoSessionDescription: 'Try logging in ',

        // MoviesListDisplay
        OpenDetails: 'Open details Movie',
        RemoveMovie: 'Remove Movie',
        DownloadBanner: 'Downloader banner',

        here: 'Here',

        deletMovie1: 'Deseja Deletar ',
        deletMovie2: ' from your account?',
   
    }
    
    function setLanguage(){
        if(window.location.pathname.includes("/pt/")){
            Language = {
                TitlePage: 'Filmes salvos!',

                NoSession: 'Nenhuma conta conectada',
                NoSessionDescription: 'Tente fazer login por ',

                // MoviesListDisplay
                OpenDetails: 'Abrir detalhes do filme!',
                RemoveMovie: 'Remover filme da lista de salvos!',
                DownloadBanner: 'Bixar banner',


                here: 'Aqui',
        
                deletMovie1: 'Deseja Deletar ',
                deletMovie2: ' em sua conta? ',
               
            }
        }
    }
    setLanguage()


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

    function confirmRemoveMovie(movie){
        if(!window.confirm(Language.deletMovie1 + movie.name + Language.deletMovie2)){return}
        SaveMovie(movie.name, movie.id, movie.poster, '2');
        document.getElementById(movie.id).remove()
    }




    function MovieListDisplay({movie}){

        return (
            <div className='Movie' id={movie.id}>
                <img src={movie.poster} alt={movie.name}/>
                <span><b>{movie.name}</b></span>
                <div className='functionsMovie'>
                    <button onClick={()=> LinkMovie(movie.id)} className='HoverBtn'><BiLinkExternal />  <span className='HoverSpan'>  {Language.OpenDetails} </span></button>
                    <button onClick={()=> confirmRemoveMovie(movie)} className='HoverBtn'><BiBookmarkMinus/>  <span className='HoverSpan'>  {Language.RemoveMovie}  </span></button>
                    <button onClick={()=> DownloadBanner(movie.poster, movie.name)} className='HoverBtn'><BiDownload/> <span className='HoverSpan'> {Language.DownloadBanner}  </span></button>
                </div>
            </div> 
        )
    }

    return (
        <main className='SavesPage'>
            <div  className='content'>
                <h2>  {Language.TitlePage}</h2>
                <div className='ListMoviesSaves'>
                    {MoviesList.map((MoviesList) => <MovieListDisplay key={MoviesList.name} movie={MoviesList} />)}
                </div>
                {window.sessionStorage.getItem('session') !== 'on' && (
                    <div id='History-NoSession' className='History-Error'>
                        <h2><BiConfused/>  {Language.NoSession}</h2>
                    <span>  {Language.NoSessionDescription} <a href='/login'>here</a></span>
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