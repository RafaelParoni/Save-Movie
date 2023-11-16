import './SearchMovie.css';
import Navbar from './../../Components/NavBar/NavBar'

import { setMovieSearch } from '../../Components/NavBar/components/SearchBtn';
import { SearchMovie } from '../../Components/Functions/SearchMovie';


function SearchMoviePage() {
    const urlParams = new URLSearchParams(window.location.search);
    const MovieName = urlParams.get("m")
    var MovieObj = {}
    
    function StartSearchMovie(){
        setMovieSearch(MovieName)


        SearchMovie(MovieName).then(function(result) {
            // console.log(result)
            var i = 0
            var MoviesObjSearch  = []
            while(i < result.length){
                MoviesObjSearch.push(
                    {name: result[i].name,
                    banner: result[i].banner,
                    description: result[i].description,
                    trailer: result[i].trailer,
                    year: result[i].banner,
                    geners: result[i].geners,
                    Released: result[i].Released,
                    Runtime: result[i].Runtime,
                    
                    }
                )
                i++
            }

            /* 
                name: response.data.Title, 
                banner: response.data.Poster, 
                description: response.data.Plot, 
                trailer: response.data.trailer, 
                year: response.data.Year,
                geners: response.data.Genre,
                Released: response.data.Released,
                Runtime: Runtimevalue,
            */
            console.log(result)
            console.log(MoviesObjSearch)
            MovieObj = MoviesObjSearch
        });

    }
    setTimeout(StartSearchMovie,10)

    
    function teste(){
        console.log(MovieObj)
    }



    return (
        <>
            <Navbar/>
            <h1>SearchMovie</h1>
            <button onClick={()=> teste()}> TESTEEEEE</button>
        </>
    );
  }
  
  export default SearchMoviePage;
  