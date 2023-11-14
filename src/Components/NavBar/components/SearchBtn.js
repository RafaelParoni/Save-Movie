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
    return (
        <div className='MenuBar'>
            <div className='SearchDiv'>
                <input 
                    maxLength={50}
                    value={SearchMovieName} 
                    onChange={(e)=> UpdateValueMovieName(e.target.value)} 
                    className='InputSearch' 
                    type='text' 
                    placeholder='Search Movie...' />
                <button onClick={()=> UpdateValueMovieName('')} id='BtnClearSearch' className='BtnClearSearch'><BiEraser size={20}/></button>
                <div className='BtnSearch'><button id='BtnSearchOff'><BiSearchAlt2 size={30}/></button> <button id='BtnSearchON'><BiSearchAlt2 size={30}/></button></div>
            </div>
        </div>
    )
}

export default SearchNavBtn;