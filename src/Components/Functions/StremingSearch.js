 import axios from "axios";
 import { STREAMING_KEY } from "./keys/importKey";
 
 export async function StremingSearch(id){
    const options = {
        method: 'GET',
        url: 'https://streaming-availability.p.rapidapi.com/get',
        params: {
          output_language: 'en',
          imdb_id: id
        },
        headers: {
          'X-RapidAPI-Key': STREAMING_KEY,
          'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
        }
    };      
      
    try {
        const response = await axios.request(options);
        return response
    }catch (error) {
        return error
    }
 }