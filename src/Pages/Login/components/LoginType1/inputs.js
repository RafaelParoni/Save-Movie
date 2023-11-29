import './../../Login.css';
import {CiLock, CiRead, CiUnread} from 'react-icons/ci'
import { BiInfoSquare } from "react-icons/bi";

function InputsFomrType1() {

    function ViewPassword(){
        let element = document.getElementById('PasswordFormOne')
        let IconVisible = document.getElementById('ViewPassword')
        let IconNoVisible = document.getElementById('NoViewPassword')
        if(element.type === "password"){
            element.type = 'text';
            IconVisible.style.display = 'none'
            IconNoVisible.style.display = 'flex'
        }else{
            element.type = 'password';
            IconVisible.style.display = 'flex'
            IconNoVisible.style.display = 'none'
        }
    }

    var Language = {
        password: 'Password...',
   
    }
    
    function setLanguage(){
        if(window.location.pathname.includes("/pt/")){
            Language = {
                password: 'Senha...',
               
            }
        }
    }
    setLanguage()


    return (
        <div className='formInputs'>
            <input id='LoginFormOne' type='hidden'  value={''}/>
            <div id='error-divType1' className='error-msg'> <BiInfoSquare/> <span id='error-spanType1'>ERROR MSG</span></div>
            <div  className='InputLogin'>
                <span><CiLock size={25} color='#f14a2c'/></span>
                <div className="inputboxLogin">
                    <input type="password" name="PasswordFormOne" id="PasswordFormOne" autoComplete='off' className="inputUserLogin" required />
                    <label  className="labelInputLogin" id='PasswordFormOne' >{Language.password}</label>
                </div>
                <button  onClick={()=> ViewPassword(false)} ><span id='ViewPassword'><CiRead size={25}/></span> <span id='NoViewPassword'><CiUnread size={25}/></span></button>
            </div>
        </div>
    );
  }
  
  export default InputsFomrType1;