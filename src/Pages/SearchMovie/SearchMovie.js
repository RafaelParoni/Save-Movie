import './SearchMovie.css';
import Navbar from './../../Components/NavBar/NavBar'

import { setMovieSearch } from '../../Components/NavBar/components/SearchBtn';


function SearchMoviePage() {
    const urlParams = new URLSearchParams(window.location.search);
    const MovieName = urlParams.get("m")
    
    function SearchMovie(){
        console.log(MovieName)
        setMovieSearch(MovieName)
    }
    setTimeout(SearchMovie,10)



    return (
        <>
            <Navbar/>
            <h1>SearchMovie</h1>
        </>
    );
  }
  
  export default SearchMoviePage;
  