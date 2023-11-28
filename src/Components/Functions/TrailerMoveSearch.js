import axios from "axios";
import { MOVIE_MINI_DATABASE_KEY } from "./keys/importKey";
export async function TrailerMovieSearch(value){
    
    const options = {
        method: 'GET',
        url: 'https://moviesminidatabase.p.rapidapi.com/movie/id/' + value,
        headers: {
          'X-RapidAPI-Key': MOVIE_MINI_DATABASE_KEY,
          'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
        }
      };
    
    try {
        const response = await axios.request(options);
        return (response.data)
    } catch (error) {
        return ( error)

    }
}