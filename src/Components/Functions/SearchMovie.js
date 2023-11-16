import axios from "axios"


export async function SearchMovie(value){

      var MoviesObj = []
      var MoviesLenght = await SearchMovieLength(value).then(function(result) {
        return result
      });
      const api = axios.create({
        baseURL: 'https://www.omdbapi.com/'
      })

      console.log('Loading...')
      var i = 0
      while(i < MoviesLenght){
        const response = await api.get(`?i=${await SearchMovieId(value, i)}&apikey=c74f3650`);
       
        var Runtimevalue = 'Not found Runtime'
        if(response.data.Runtime === 'N/A'){
          Runtimevalue = 'Not found Runtime'
        }else{
          Runtimevalue = response.data.Runtime
        }
        MoviesObj.push(
            {name: response.data.Title, 
            banner: response.data.Poster, 
            description: response.data.Plot, 
            trailer: response.data.trailer, 
            year: response.data.Year,
            geners: response.data.Genre,
            Released: response.data.Released,
            Runtime: Runtimevalue,
            }
        )
        if(i === 20){
          break
        }

        i++
      }
      console.log('Loading completed!')
      
      return (MoviesObj)

      
    
  }

  async function SearchMovieId(title, number){
    const optionsSearchID = {
      method: 'GET',
      url: 'https://moviesdatabase.p.rapidapi.com/titles/search/title/' + title,
      params: {
        titleType: 'movie',
        limit: '20'
      },
      headers: {
        'X-RapidAPI-Key': '4d1fc03470msh98ed2d469a33f37p102184jsn7cab8e913b66',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
      }
    };
    try {
      const responseID = await axios.request(optionsSearchID);
      return responseID.data.results[number].id
      // const responseSearchDetails = await axios.request(optionsSearchDetails);
      //return responseID.data
      
    } catch (error) {
      return (error)
    }
  }
  async function SearchMovieLength(title){
    const optionsSearchLength= {
      method: 'GET',
      url: 'https://moviesdatabase.p.rapidapi.com/titles/search/title/' + title,
      params: {
        titleType: 'movie',
        limit: '20'
      },
      headers: {
        'X-RapidAPI-Key': '4d1fc03470msh98ed2d469a33f37p102184jsn7cab8e913b66',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
      }
    };
    try {
      const responseID = await axios.request(optionsSearchLength);
      return responseID.data.results.length
      // const responseSearchDetails = await axios.request(optionsSearchDetails);
      //return responseID.data
      
    } catch (error) {
      return (error)
    }
  }

