 import axios from "axios";
 
 
 export async function StremingSearch(id){
    const options = {
        method: 'GET',
        url: 'https://streaming-availability.p.rapidapi.com/get',
        params: {
          output_language: 'en',
          imdb_id: id
        },
        headers: {
          'X-RapidAPI-Key': '4d1fc03470msh98ed2d469a33f37p102184jsn7cab8e913b66',
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