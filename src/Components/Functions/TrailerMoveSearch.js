import axios from "axios";

export async function TrailerMovieSearch(value){
    
    const options = {
        method: 'GET',
        url: 'https://moviesminidatabase.p.rapidapi.com/movie/id/' + value,
        headers: {
          'X-RapidAPI-Key': '4d1fc03470msh98ed2d469a33f37p102184jsn7cab8e913b66',
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