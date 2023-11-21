import './Home.css';
import Navbar from './../../Components/NavBar/NavBar' // BiChevronDown
import {BiSend, BiHomeAlt2, BiHeart,BiUser } from 'react-icons/bi'


// Banco de dados
import { initializeApp   } from "firebase/app";
import {collection, getDocs, getFirestore} from "firebase/firestore";

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

var Session = false
var Hisotry = false

function HomePage() {
    
   

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
        console.log(window.sessionStorage.getItem('session'))
        var resultsHistory = ''
        await SearchHistoryUser().then(function(returns){
            resultsHistory = returns
        })
        console.log(resultsHistory)
        if(window.sessionStorage.getItem('session') === null){
            console.log('Não temos uma sessão aqui')
        }else if(resultsHistory.length === 0){
            console.log('Não temos nenhum historico seu!')
        }else{
            console.log('Carregando historico')
            console.log(resultsHistory)
        }
    }
    setTimeout(DestaqueHome,10)




    function hrefFunc(value){
        window.location = value
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
                
        
            </main>
        </>
    );
  }
  
  export default HomePage;
  