import './Home.css';
import Navbar from './../../Components/NavBar/NavBar'
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
            <span>Gners:</span>
            <div className='Genrs'>
                <span> <BiSend/> Action:</span>
                <div id='result-genrs-action' className='reultsGenrs'>
                    <div className='genrs-card'></div>
                    <div className='genrs-card'></div>
                    <div className='genrs-card'></div>
                    <div className='genrs-card'></div>
                    <div className='genrs-card'></div>
                    <div className='genrs-card'></div>
                    <div className='genrs-card'></div>
                    <div className='genrs-card'></div>
                    <div className='genrs-card'></div>
                    <div className='genrs-card'></div>
                    <div className='genrs-card'></div>
                </div>
            </div>
            <div className='Genrs'>
                <span> <BiSend/> Comedia:</span>
                <div id='result-genrs-action' className='reultsGenrs'>
                    <div className='genrs-card'></div>
                    <div className='genrs-card'></div>
                    <div className='genrs-card'></div>
                    <div className='genrs-card'></div>
                    <div className='genrs-card'></div>
                    <div className='genrs-card'></div>
                    <div className='genrs-card'></div>
                    <div className='genrs-card'></div>
                    <div className='genrs-card'></div>
                    <div className='genrs-card'></div>
                    <div className='genrs-card'></div>
                </div>
            </div>
            </main>
        </>
    );
  }
  
  export default HomePage;
  