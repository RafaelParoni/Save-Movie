import axios from "axios"


export async function SearchMoviePages(value){

      const api = axios.create({
        baseURL: 'https://www.omdbapi.com/'
      })
      const response = await api.get(`?s=${value}&apikey=c74f3650`);
      // TOTAL DE PAGINAS É  data.totalResults DIVIDIDO POR 10 = (TOTAL DE PAGINAS) ////// (TOTAL DE PAGINAS) NUMERO INTEIRO -1 = TOTAL DE PAGINAS FINAL
      var pages  = parseInt(response.data.totalResults) / 10
      pages = parseInt(pages)
      return (pages)


  }
