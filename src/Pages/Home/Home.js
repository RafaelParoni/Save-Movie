import './Home.css';
import Navbar from './../../Components/NavBar/NavBar' // BiChevronDown
import {BiSend, BiHomeAlt2, BiHeart, BiUser, BiConfused, BiTagAlt, BiSearchAlt2, BiSad, BiTrashAlt} from 'react-icons/bi'


// Banco de dados
import { initializeApp   } from "firebase/app";
import {collection, getDocs, getFirestore} from "firebase/firestore";
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


// History


function HomePage() {

    const [History, SetHistory] = useState([])
    
   

    async function SearchHistoryUser(){
        if(window.sessionStorage.getItem('session') !== null){
            const db = getFirestore(firebaseApp);
            const HistoryUserID = collection(db, window.localStorage.getItem('id'));

            const data = await getDocs(HistoryUserID);
            var HistoryUser = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
            return (HistoryUser)
        }else{
            return ({history: null})
        }

    }
 
    async function DestaqueHome(){
        if(Object.keys(History).length > 0){
            return
        }
        var resultsHistory = ''
        await SearchHistoryUser().then(function(returns){
            resultsHistory = returns
        })
        if(window.sessionStorage.getItem('session') === null){
            document.getElementById('History-NoSession').style.display = 'flex'
        }else if(resultsHistory.length === 0){
            document.getElementById('History-NoHistory').style.display = 'flex'
        }else{
            document.getElementById('History-Results').style.display = 'flex'
            SetHistory(resultsHistory)
        }
    }
    setTimeout(DestaqueHome,10)




    function hrefFunc(value){
        window.location = value
    }

    function SearchMovieHistory(Movie){
        window.location = '/search?m=' + Movie
    }
    async function DeletHistory(value){
        alert('Deleting history: ' + value)
    }

    function HistoryControlBox({item}){
        console.log(item)
        return <div key={item.id} className='History-Results-Div'> 
            <div className='History-Results-Block'><BiTagAlt size={25}/> <input type='text' placeholder={item.name}  disabled/> <button onClick={()=> SearchMovieHistory(item.name)}><BiSearchAlt2 size={25}/></button></div> <button onClick={()=> DeletHistory(item.id)} className='BtnDelHistory'><BiTrashAlt size={20}/></button>
        </div>
    }   

    return (
        <>
            <Navbar/>
            <main className='HomePage'>
                <div className='Options'>
                    <BiSend/> Sugestões: 
                    <button onClick={()=> hrefFunc('/curtidos')}> <BiHeart/> Curtidos</button> 
                    <button onClick={()=> hrefFunc('/')}> <BiHomeAlt2/> Home</button> 
                    <button onClick={()=> hrefFunc('/profile')}> <BiUser/> Perfil</button>
                </div>
                <div className='HistoryDiv'>
                    <div id='History-NoSession' className='History-Error'>
                        <h2><BiConfused/> No sessions connected </h2>
                        <span>Try logging in <a href='/login'>here</a></span>
                    </div>
                    <div id='History-NoHistory' className='History-Error'>
                        <h2><BiSad/> No searches done recently! </h2>
                        <span>Do a search so it may appear here</span>
                    </div>
                    <div id='History-Results' className='History-Results'>
                        <h2>Your last 10 searches:</h2>
                        {History.map((History) => <HistoryControlBox item={History} />)}
                    </div>
                </div>
                
        
            </main>
        </>
    );
  }
  
  export default HomePage;
  