import './Home.css';
import Navbar from './../../Components/NavBar/NavBar' // BiChevronDown
import {BiSend, BiHomeAlt2, BiHeart,BiUser } from 'react-icons/bi'

function HomePage() {
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
  