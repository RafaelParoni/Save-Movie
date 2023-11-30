// Imports Style Page
import './Registro.css';

// Imports Componentes  
import FormOne from './components/FormOne';
import FormTwo from './components/FormTwo';
import FormThree from './components/FormThree';
import ProgressBar from './components/ProgressBar';
import NewStage from './components/NewStage';
import CreateNewAccount from './components/CreateNewAccount';

import { BiInfoSquare } from 'react-icons/bi';



function RegistroPage() {


    if(window.sessionStorage.getItem('session') !== null){
        window.history.back()
        // Mandar de voltar caso tenha session ativa
    }

    var Language = {
        singUp: 'Sign Up',
        havaAccount: 'Already have an account? Click',
        toLogin: 'to login',
        here: 'HERE'
   
    }
    
    function setLanguage(){
        if(window.location.pathname.includes("/pt/")){
            Language = {
                singUp: 'registrar-se',
                havaAccount: 'já tem uma conta? Clique',
                toLogin: 'para fazer login',
                here: 'AQUI'
               
            }
        }
    }
    setLanguage()


    return (
        <main className='RegisterPage'>
            <div className='FormRegister'>
                <h1>{Language.singUp}</h1>
                <CreateNewAccount/>
                <ProgressBar/>
                <div id='errorregister-div' className='error-msg'> <BiInfoSquare/> <span id='errorregister-span'></span></div>
                <FormOne />
                <FormTwo />
                <FormThree />
                <NewStage/>
                <span>{Language.havaAccount} <a href='/login' >{Language.here} </a> {Language.toLogin}</span>
            </div>
        </main>
    );
  }
  
  export default RegistroPage;
  