import './../Login.css';

// import Forms Type ONE
import ProfileFomrType1 from './LoginType1/Profile';
import InputsFomrType1 from './LoginType1/inputs'

// import Forms Type TWO
import InputsFomrType2 from './LoginType2/inputs';

// import Components
import LoginFunciton from './LoginFunction';
import LogOutFull from '../../../Components/Functions/LogOutFull';

export function LoginType1() {

    return (
        <div id='loginType1' className='loginForm'>
            <h3>Conecte-se com:</h3>
            <ProfileFomrType1/>
            <InputsFomrType1/>
            <LoginFunciton/>
            <span className='detailsLogin'>não é voce? <button onClick={()=> LogOutFull()}>aqui</button> para sair</span>
        </div>
    );
  }
  
  export function LoginType2() {

    return (
        <div id='loginType2' className='loginForm'>
            <h3>Conecte-se com:</h3>
            <InputsFomrType2/>
            <LoginFunciton/>
            <span>nãõ é voce? click aqui para sair</span>
        </div>
    );
  }
  
