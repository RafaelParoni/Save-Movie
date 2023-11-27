import { useState } from 'react';
import './../Navbar.css'
import {BiSearchAlt2, BiEraser  } from 'react-icons/bi'


export function setMovieSearch(value){
    document.getElementById('inputSearchMovie').value = value
    document.getElementById('BtnClearSearch').style.opacity = '1'
}

function SearchNavBtn(){
    const [SearchMovieName, setSearchMovieName] = useState('')
    const UpdateValueMovieName = (value) => {
        setSearchMovieName(value)
        if(value === ''){
            document.getElementById('BtnClearSearch').style.opacity = '0'
        }else{
            document.getElementById('BtnClearSearch').style.opacity = '1'
        }
    }

    async function SearchMovie(){
        var LoadElement = document.getElementById('BtnLoader')
        var SearchElement = document.getElementById('BtnSearch')
        LoadElement.style.display = 'flex'
        SearchElement.style.display = 'none'
        if(SearchMovieName === '' || SearchMovieName === undefined){
            setTimeout(function(){
                LoadElement.style.display = 'none'
                SearchElement.style.display = 'flex'
            },1000)
            return
        }
        if(window.location.pathname.includes("/pt/")){
            window.location = `/pt/search?m=${SearchMovieName}`
        }else{
            window.location = `/search?m=${SearchMovieName}`
        }
    }

    var Language = {
        placeholderSearch: 'Movie Name...'
    }
    function setLanguage(){
        if(window.location.pathname.includes("/pt/")){
            Language = {
                placeholderSearch: 'Nome do filme...'
            }
        }
    }
    setLanguage()
    return (
        <div className='MenuBar'>
            <div className='SearchDiv'>
                <input 
                    maxLength={50}
                    value={SearchMovieName} 
                    onChange={(e)=> UpdateValueMovieName(e.target.value)} 
                    className='InputSearch' 
                    type='text' 
                    id='inputSearchMovie'
                    placeholder={Language.placeholderSearch}
                    onKeyDown={event => {
                        if (event.key === 'Enter') {
                            SearchMovie()
                        }
                        }} 
                        />
                <button onClick={()=> {UpdateValueMovieName(''); document.getElementById('inputSearchMovie').value = '' }} id='BtnClearSearch' className='BtnClearSearch'><BiEraser size={20}/></button>
                <div className='BtnSearch'><button onClick={()=> SearchMovie()} id='BtnSearch'><BiSearchAlt2 size={30}/></button><span id='BtnLoader' className="loader"></span></div>
            </div>
        </div>
    )
}

export default SearchNavBtn;