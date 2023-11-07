import './NotFound.css';
import {VscDebugDisconnect, VscSignIn, VscBug} from 'react-icons/vsc'
import Logo from './../../Icons/FavIcon.png'

function NotFoundPage() {

    function Back(){
        window.history.back()
    }
    return (
        <div className='NotFoundPage'>
            <div>
                <p><VscBug/> Oops..</p>
                <h1><VscDebugDisconnect/> 404 </h1>
                <p> página não encontrada! </p>
                <button onClick={()=> Back()}><VscSignIn/>Voltar</button>
            </div>
            <div>
                <img  alt='logo' src={Logo}/>
                <h2>Save Movies</h2>
            </div>
        </div>
    );
  }
  
  export default NotFoundPage;
  