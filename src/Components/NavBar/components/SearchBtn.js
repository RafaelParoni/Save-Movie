import { useState } from 'react';
import './../Navbar.css'
import {BiSearchAlt2, BiEraser  } from 'react-icons/bi'

// Banco de dados
import { initializeApp   } from "firebase/app";
import {collection, getDocs, getFirestore, setDoc, doc} from "firebase/firestore";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyCi1wYTsZBEVZp2zAQquOY8mYp7ZTe3Mnw",
    authDomain: "savemovie-e7ea6.firebaseapp.com",
    projectId: "savemovie-e7ea6",
    storageBucket: "savemovie-e7ea6.appspot.com",
    messagingSenderId: "613203193395",
    appId: "1:613203193395:web:8430b6069114d133157d46",
    measurementId: "G-GV5GW3T3ZV"
});


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
        var MovieHistory = {
            name: SearchMovieName
        }
        console.log(MovieHistory)
        if(window.sessionStorage.getItem('session') === 'on'){
            const db = getFirestore(firebaseApp);
            var collectionUser = 'history-' + window.localStorage.getItem('id')
            const HistoryUserID = collection(db, collectionUser);
    
            const data = await getDocs(HistoryUserID);
            var HistoryUser = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
            var id = HistoryUser.length + 1
            if(HistoryUser.length > 9){
                id = HistoryUser.length - Math.floor((Math.random() * 10) + 1)
            }
            await setDoc(doc(db, collectionUser, id.toString()), MovieHistory);
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
                    id='inputSearchMovie'
                    placeholder='Search Movie Name...'
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