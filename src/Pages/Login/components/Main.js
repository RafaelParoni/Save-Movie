import './../Login.css';

// import Forms Type ONE
import ProfileFomrType1 from './LoginType1/Profile';
import InputsFomrType1 from './LoginType1/inputs'

// import Forms Type TWO
import InputsFomrType2 from './LoginType2/inputs';

// import Components
import LoginFunciton from './LoginFunction';
import LogOutFull from '../../../Components/Functions/LogOutFull';

var Language = {
    Connect: 'Connect with:',
    NotYou1: "Isn't this your account? Click ",
    NotYou2: "to log in",
    DontHaveAnAccount1: "Don't have an account? Click ",
    DontHaveAnAccount2: "to register",
    Here: 'Here',
}

function setLanguage(){
    if(window.location.pathname.includes("/pt/")){
        Language = {
            Connect: 'Entrar com:',
            NotYou1: "Esta não é sua conta? Clique ",
            NotYou2: " Para fazer login",
            DontHaveAnAccount1: "Não tem uma conta? Clique ",
            DontHaveAnAccount2: " Para criar uma!",
            Here: 'Aqui',
        }
    }
}
setLanguage()

export function LoginType1() {

    return (
        <div id='loginType1' className='loginForm'>
            <h3>{Language.Connect}</h3>
            <ProfileFomrType1/>
            <InputsFomrType1/>
            <LoginFunciton/>
            <span className='detailsLogin'>{Language.NotYou1} <button onClick={()=> LogOutFull()}> {Language.Here} </button> {Language.NotYou2}</span>
        </div>
    );
  }
  
  export function LoginType2() {

    return (
        <div id='loginType2' className='loginForm'>
            <h3>{Language.Connect}</h3>
            <InputsFomrType2/>
            <LoginFunciton/>
            <span>{Language.DontHaveAnAccount1}<a href='/register'> {Language.Here} </a> {Language.DontHaveAnAccount2}</span>
        </div>
    );
  }
  
