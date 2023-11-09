import './../../Login.css';
import {CiLock, CiRead, CiUnread} from 'react-icons/ci'

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

    return (
        <div className='formInputs'>
            <input id='LoginFormOne' type='hidden'  value={window.localStorage.getItem('login')}/>
            <div  className='InputLogin'>
                <span><CiLock size={25} color='#f14a2c'/></span>
                <div className="inputboxLogin">
                    <input type="password" name="PasswordFormOne" id="PasswordFormOne" autoComplete='off' className="inputUserLogin" required />
                    <label  className="labelInputLogin" id='PasswordFormOne' >Password...</label>
                </div>
                <button  onClick={()=> ViewPassword(false)} ><span id='ViewPassword'><CiRead size={25}/></span> <span id='NoViewPassword'><CiUnread size={25}/></span></button>
            </div>
        </div>
    );
  }
  
  export default InputsFomrType1;