import { useState } from 'react';


import './Login.css';
import ProfileImg from './../../Icons/users/AavatarFemale1.png'



function LoginPage() {

    const [Name, setName] = useState('')
    const [Password , setPassword] = useState('')
    return (
        <div className='LoginPage'>
            <form className='LoginForm'>
                <div className='LoginUser'>
                    <img alt='UserIcon' src={ProfileImg} height={'150px'} />
                    <p>Name</p>
                </div>
                <div className='form'>
                    <input type='text' placeholder='Login' value={Name} onChange={(e)=> setName(e.target.value)} autoComplete='on'/>
                    <input type='text' placeholder='Password' value={Password} onChange={(e)=> setPassword(e.target.value)} autoComplete='on'/>
                    <button>Entrar</button>
                </div>
            </form>
        </div>
    );
  }
  
  export default LoginPage;
  