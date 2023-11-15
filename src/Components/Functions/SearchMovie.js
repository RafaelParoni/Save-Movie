import axios from "axios"

export async function SearchMovie(value){

    const options = {
        method: 'GET',
        url: 'https://streaming-availability.p.rapidapi.com/search/title',
        params: {
          title: value,
          country: 'us',
          show_type: 'all',
          output_language: 'en'
        },
        headers: {
          'X-RapidAPI-Key': '4d1fc03470msh98ed2d469a33f37p102184jsn7cab8e913b66',
          'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
      } catch (error) {
          console.error(error);
      }
}