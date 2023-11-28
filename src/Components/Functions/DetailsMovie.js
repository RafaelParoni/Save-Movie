import axios from "axios";
import { MOVIEDATABASE_KEY } from "./keys/importKey";
export async function DetailsMovieSearch(value){
    
    const options = {
        method: 'GET',
        url: 'https://moviesdatabase.p.rapidapi.com/titles/' + value,
        params: {info: 'base_info'},
        headers: {
          'X-RapidAPI-Key': MOVIEDATABASE_KEY,
          'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
      };
    
    try {
        const response = await axios.request(options);
        return (response.data)
    } catch (error) {
        return ( error)

    }
}