import './../Login.css';

// import Forms Type ONE
import ProfileFomrType1 from './LoginType1/Profile';
import InputsFomrType1 from './LoginType1/inputs'

// import Forms Type TWO
import InputsFomrType2 from './LoginType2/inputs';

// import Components
import LoginFunciton from './LoginFunction';


export function LoginType1() {

    return (
        <div id='loginType1' className='loginForm'>
            <h3>Conecte-se com:</h3>
            <ProfileFomrType1/>
            <InputsFomrType1/>
            <LoginFunciton/>

        </div>
    );
  }
  
  export function LoginType2() {

    return (
        <div id='loginType2' className='loginForm'>
            <h3>Conecte-se com:</h3>
            <InputsFomrType2/>
            <LoginFunciton/>
        </div>
    );
  }
  
