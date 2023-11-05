import './Home.css';
import Navbar from './../../Components/NavBar/NavBar'


function HomePage() {
    function Teste(){
      //  window.sessionStorage.setItem('Login', 'email')
        window.localStorage.setItem('name', 'nome')
        window.localStorage.setItem('id', '0090717414141')
        window.localStorage.setItem('IconProfile', 'avatar_01')
        window.localStorage.setItem('email', 'email@gmail.com')
        console.log(window.sessionStorage)
        console.log(window.localStorage)
    }
    return (
        <>
            <Navbar/>
            <h1>Home</h1>
            <button onClick={()=> Teste()}>Funcito Test</button>
            <fieldset style={{width: '200px'}}>
                <legend>Pages:</legend>
                <ul>
                    <li><a href='/login'> login</a> <br/></li>
                    <li><a href='/registro'> registro</a> <br/></li>
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
  