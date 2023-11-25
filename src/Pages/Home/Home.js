import './Home.css';
import Navbar from './../../Components/NavBar/NavBar' // BiChevronDown
import {BiSend, BiHomeAlt2, BiBookmark, BiUser, BiConfused,BiTrophy, BiTagAlt, BiSearchAlt2, BiSad, BiTrashAlt} from 'react-icons/bi'


// Functions

import { RandomMoviesApi } from '../../Components/Functions/RandomMovie';

// import images

import ErrorImage from './../../Images/404.png'

// Banco de dados
import { initializeApp   } from "firebase/app";
import {collection, getDocs, getFirestore, deleteDoc, doc} from "firebase/firestore";
import { useState } from 'react';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyCi1wYTsZBEVZp2zAQquOY8mYp7ZTe3Mnw",
    authDomain: "savemovie-e7ea6.firebaseapp.com",
    projectId: "savemovie-e7ea6",
    storageBucket: "savemovie-e7ea6.appspot.com",
    messagingSenderId: "613203193395",
    appId: "1:613203193395:web:8430b6069114d133157d46",
    measurementId: "G-GV5GW3T3ZV"
});



var HistoryValue = 'loading'


function HomePage() {

    
    function hrefFunc(value){
        window.location = value
    }

    const db = getFirestore(firebaseApp);


    // Random Movies Funcitons --> 
    const [RandomMovies, setRandomMovie] = useState([])
    async function RandomMovieSearch(){     
        if(Object.keys(RandomMovies).length > 0){
            return
        }
        var Movies = []
        await RandomMoviesApi().then(function(result){
            Movies = result.results
        })
        setRandomMovie(Movies)
    }
    setTimeout(RandomMovieSearch,10)
    function RandomMoviesControlBox({item}){
        var Title = item.titleText.text
        if(Title.length > 15){
            Title = Title.slice(0,15)
            Title = Title.concat("", "...")
          }

        var Poster = ''
        if(item.primaryImage === null || item.primaryImage === 'N/A'){
            Poster = ErrorImage
        }else{
            Poster = item.primaryImage.url
        }

        return <div onClick={() => {window.location = '/details?d=' + item.id}} id='MoviesCard' className='MovieRandom'>
            <img alt={'Image: ' + Title} src={Poster} onError={onImageError} />
            <span>{Title}</span>
        </div>
    }

    const onImageError = (e) => {
        e.target.src = ErrorImage
    }

    // History Funcitons -- >
    const [History, SetHistory] = useState([])
    
    async function SearchHistoryUser(){
        if(window.sessionStorage.getItem('session') !== null){
            var collectionUser = 'history-' + window.localStorage.getItem('id')

            const HistoryUserID = collection(db, collectionUser);

            const data = await getDocs(HistoryUserID);
            var HistoryUser = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
            return (HistoryUser)
        }else{
            return ({history: null})
        }

    }

    async function HistoryType(){
        if(Object.keys(History).length > 0){
            return
        }
        var resultsHistory = ''
        await SearchHistoryUser().then(function(returns){
            resultsHistory = returns
        })
        if(window.sessionStorage.getItem('session') === null){
            HistoryValue = 'Session'
        }else if(resultsHistory.length === 0){
            HistoryValue = 'Error'
        }else{
            HistoryValue = 'Results'
            SetHistory(resultsHistory)
        }
    }
    setTimeout(HistoryType,10)
    

    function SearchMovieHistory(Movie){
        window.location = '/search?m=' + Movie
    }

    async function DeletHistory(value){
        var collectionUser = 'history-' + window.localStorage.getItem('id')
        const userDoc = doc(db, collectionUser, value)
        await deleteDoc(userDoc);
        document.getElementById('HistoryId-' + value).remove()
    }

    function HistoryControlBox({item}){
        return <div id={'HistoryId-' + item.id} className='History-Results-Div'> 
            <div className='History-Results-Block'><BiTagAlt size={25}/> <input type='text' placeholder={item.name}  disabled/> <button onClick={()=> SearchMovieHistory(item.name)}><BiSearchAlt2 size={25}/></button></div> <button onClick={()=> DeletHistory(item.id)} className='BtnDelHistory'><BiTrashAlt size={20}/></button>
        </div>
    }   



    return (
        <>
            <Navbar/>
            <main className='HomePage'>
                <div className='Options'>
                    <BiSend/> suggestions: 
                    <button onClick={()=> hrefFunc('/saves')}> <BiBookmark/> Saves</button> 
                    <button onClick={()=> hrefFunc('/')}> <BiHomeAlt2/> Home</button> 
                    <button onClick={()=> hrefFunc('/profile')}> <BiUser/> Profile</button>
                </div>
                <div className='DispleyHome'>
                    <div className='MoviesDiv'>
                        <h1> <BiTrophy /> Movies for you:</h1>
                        <div className='MoviesReults'>
                            {Object.keys(RandomMovies).length === 0 && (
                                <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                            )}
                            {RandomMovies.map((RandomMovies) => <RandomMoviesControlBox item={RandomMovies} />)}
                        </div>
                    </div>
                    <div className='HistoryDiv'>
                        <h2><span> <BiSend/> </span> Your last 10 searches:</h2>
                        {HistoryValue === 'loading' && (
                                <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                        )}
                        {HistoryValue === 'Session' && (
                            <div id='History-NoSession' className='History-Error'>
                                <h2><BiConfused/> No sessions connected </h2>
                                <span>Try logging in <a href='/login'>here</a></span>
                            </div>
                        )}
                        {HistoryValue === 'Error' && (
                            <div id='History-NoHistory' className='History-Error'>
                                <h2><BiSad/> No searches done recently! </h2>
                                <span>Do a search so it may appear here</span>
                            </div>
                        )}
                        {HistoryValue === 'Results' && (
                            <div id='History-Results' className='History-Results'>
                                <div id='History-Results-divs'>{History.map((History) => <HistoryControlBox item={History} />)}</div>
                            </div>
                        )}
    
                    </div>   
                </div>  
                
            </main>
        </>
    );
  }
  
  export default HomePage;
  