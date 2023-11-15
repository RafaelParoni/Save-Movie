import './Home.css';
import Navbar from './../../Components/NavBar/NavBar'


import { SearchMovie } from '../../Components/Functions/SearchMovie';


function HomePage() {
    function ConsoleLogStorage(){
        console.log(window.sessionStorage)
        console.log(window.localStorage)
    }
    function CreateSession(){
        window.sessionStorage.setItem('session', 'on')
    }
    function CreateLocalStorage(){
        window.localStorage.setItem('Mode', 'light')
        window.localStorage.setItem('login', 'TesteEmail@gmail.com')
        window.localStorage.setItem('imgProfile', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fprofile%2F&psig=AOvVaw0re8eQzJj1RYsVfLs3hF3s&ust=1699646603601000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCODd38nat4IDFQAAAAAdAAAAABAE')
        window.localStorage.setItem('name', 'Test Acount')
        window.localStorage.setItem('passwordCrypt', 'Passcrypt')
    }
    function ResetSession(){
        window.sessionStorage.clear()
    }
    function ResetLocalStorage(){
        window.localStorage.clear()
    }
    return (
        <>
            <Navbar/>
            <h1>Home</h1>
            <button onClick={()=> ConsoleLogStorage()}>ConsoleLogStorage Test</button>
            <button onClick={()=> CreateSession()}>Iniciar Session Test</button>
            <button onClick={()=> CreateLocalStorage()}>Iniciar localStorage Test</button>
        
            <button onClick={()=> ResetSession()}>Reset sessionStorage</button>
            <button onClick={()=> ResetLocalStorage()}>Reset localStorage</button>
            <button onClick={()=> SearchMovie('Batman')}> Search Movie</button>
            <fieldset style={{width: '200px'}}>
                <legend>Pages:</legend>
                <ul>
                    <li><a href='/login'> login</a> <br/></li>
                    <li><a href='/register'> registro</a> <br/></li>
                    <li><a href='/autologin'> autologin</a> <br/></li>
                    <li><a href='/profile'> profile</a> <br/></li>
                    <li><a href='/search'> search</a> <br/></li>
                    <li><a href='/404'> Not Found Page</a> <br/></li>
                    <li><a href='/'> Home</a> <br/></li>
                </ul>
            </fieldset> 
        </>
    );
  }
  
  export default HomePage;
  