import axios from "axios";
import { MOVIEDATABASE_KEY } from "./keys/importKey";
export async function RandomMoviesApi(){
    const options = {
      method: 'GET',
      url: 'https://moviesdatabase.p.rapidapi.com/titles/random',
      params: {
        list: 'top_rated_series_250'
      },
      headers: {
        'X-RapidAPI-Key': MOVIEDATABASE_KEY,
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
      }
    };
      
      try {
          const response = await axios.request(options);
          return (response.data)
      } catch (error) {
          console.error(error);
          return (error)
      }
}