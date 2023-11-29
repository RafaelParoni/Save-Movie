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


    return (
        <main className='RegisterPage'>
            <div className='FormRegister'>
                <h1>Sign Up</h1>
                <CreateNewAccount/>
                <ProgressBar/>
                <div id='errorregister-div' className='error-msg'> <BiInfoSquare/> <span id='errorregister-span'>TESTE</span></div>
                <FormOne />
                <FormTwo />
                <FormThree />
                <NewStage/>
                <span>Already have an account? Click <a href='/login' >HERE </a> to login</span>
            </div>
        </main>
    );
  }
  
  export default RegistroPage;
  