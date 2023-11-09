import './../../Login.css';
import {CiLock, CiRead, CiUnread} from 'react-icons/ci'

function InputsFomrType2() {

    function ViewPassword(){
        let element = document.getElementById('PasswordFormTwo')
        let IconVisible = document.getElementById('ViewPasswordTwo')
        let IconNoVisible = document.getElementById('NoViewPasswordTwo')
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

    return (
        <div className='formInputs'>
           <div  className='InputLogin'>
                <span><CiLock size={25} color='#f14a2c'/></span>
                <div className="inputboxLogin">
                    <input type="text" name="LoginFormTwo" id="LoginFormTwo" autoComplete='off' className="inputUserLogin" required />
                    <label  className="labelInputLogin"  >Email...</label>
                </div>
            </div>
            <div  className='InputLogin'>
                <span><CiLock size={25} color='#f14a2c'/></span>
                <div className="inputboxLogin">
                    <input type="password" name="PasswordFormTwo" id="PasswordFormTwo" autoComplete='off' className="inputUserLogin" required />
                    <label  className="labelInputLogin">Password...</label>
                </div>
                <button  onClick={()=> ViewPassword()} ><span id='ViewPasswordTwo'><CiRead size={25}/></span> <span id='NoViewPasswordTwo'><CiUnread size={25}/></span></button>
            </div>
        </div>
    );
  }
  
  export default InputsFomrType2;