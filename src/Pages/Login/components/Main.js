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
            <h3>Connect with:</h3>
            <ProfileFomrType1/>
            <InputsFomrType1/>
            <LoginFunciton/>
            <span className='detailsLogin'>Don't have an account? Click <button onClick={()=> LogOutFull()}> HERE </button> to register</span>
        </div>
    );
  }
  
  export function LoginType2() {

    return (
        <div id='loginType2' className='loginForm'>
            <h3>Connect with:</h3>
            <InputsFomrType2/>
            <LoginFunciton/>
            <span>Don't have an account? Click <a href='/register'> HERE </a> to register</span>
        </div>
    );
  }
  
