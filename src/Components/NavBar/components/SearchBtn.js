import { useState } from 'react';
import './../Navbar.css'
import {BiSearchAlt2, BiEraser  } from 'react-icons/bi'

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

    function SearchMovie(){
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
        window.location = `/search?m=${SearchMovieName}`
    }

    return (
        <div className='MenuBar'>
            <div className='SearchDiv'>
                <input 
                    maxLength={50}
                    value={SearchMovieName} 
                    onChange={(e)=> UpdateValueMovieName(e.target.value)} 
                    className='InputSearch' 
                    type='text' 
                    placeholder='Search Movie...'
                    onKeyDown={event => {
                        if (event.key === 'Enter') {
                            SearchMovie()
                        }
                        }} 
                        />
                <button onClick={()=> UpdateValueMovieName('')} id='BtnClearSearch' className='BtnClearSearch'><BiEraser size={20}/></button>
                <div className='BtnSearch'><button onClick={()=> SearchMovie()} id='BtnSearch'><BiSearchAlt2 size={30}/></button><span id='BtnLoader' className="loader"></span></div>
            </div>
        </div>
    )
}

export default SearchNavBtn;