import './../Registro.css';
import {CiRead, CiUnlock, CiMail,CiUnread, CiFaceFrown, CiFaceMeh, CiFaceSmile} from 'react-icons/ci'


function FormOne() {

    function ViewPassword(ViewPassoword) {
        let element = ''
        let IconVisible = ''
        let IconNoVisible = ''
        if(ViewPassoword){
            element = document.getElementById('password')
            IconVisible = document.getElementById('ViewPasswordOne')
            IconNoVisible = document.getElementById('NoViewPasswordOne')
            if(element.type === "password"){
                element.type = 'text';
                IconVisible.style.display = 'none'
                IconNoVisible.style.display = 'flex'
            }else{
                element.type = 'password';
                IconVisible.style.display = 'flex'
                IconNoVisible.style.display = 'none'
            }
        }else{
            element = document.getElementById('ConfirmPassword')
            IconVisible = document.getElementById('ViewPasswordTwo')
            IconNoVisible = document.getElementById('NoViewPasswordTwo')
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
    }

    function PasswordStrong(){

        let password = document.getElementById('password').value;
        let passwordStrongIndicator = document.getElementById('passwordStrongIndicator');
        let passwordWeak = document.getElementById('passwordWeak');
        let passwordMedium = document.getElementById('passwordMedium');
        let passwordrStrong = document.getElementById('passwordStrong');
        let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
        let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')
        
        if(strongPassword.test(password)) {
            passwordStrongIndicator.style.backgroundColor = "green";

            passwordWeak.style.display = 'none'
            passwordMedium.style.display = 'none'
            passwordrStrong.style.display = 'flex'
        } else if(mediumPassword.test(password)) {
            passwordStrongIndicator.style.backgroundColor = 'blue';

            passwordWeak.style.display = 'none'
            passwordMedium.style.display = 'flex'
            passwordrStrong.style.display = 'none'
        } else {
            passwordStrongIndicator.style.backgroundColor = 'red';

            passwordWeak.style.display = 'flex'
            passwordMedium.style.display = 'none'
            passwordrStrong.style.display = 'none'
        }
    }

    return (
        <main id='Form-One' className='FormRegisterValues'>
            <div className='IconInput'>
                <span><CiMail size={25} color='#f14a2c'/></span>
                <div className="inputbox">
                    <input type="text" name="email" id="email" className="inputUser" required />
                    <label  className="labelInput" id='Email' >Email...</label>
                </div>
            </div>
            <div id='inputPassword' className='IconInput'>
                <span><CiUnlock size={25} color='#f14a2c'/></span>
                <div className="inputbox">
                    <input type="password" name="password" onChange={(e)=> PasswordStrong(e.target.value)} id="password" autoComplete='off' className="inputUser" required />
                    <label  className="labelInput" id='Password' >Password...</label>
                </div>
                <button onClick={()=> ViewPassword(true)}><span id='ViewPasswordOne'><CiRead size={25}/></span> <span id='NoViewPasswordOne'><CiUnread size={25}/></span></button>
            </div>
            <div id='inputPassword'  className='IconInput'>
                <span><CiUnlock size={25} color='#f14a2c'/></span>
                <div className="inputbox">
                    <input type="password" name="ConfirmPassword" id="ConfirmPassword" autoComplete='off' className="inputUser" required />
                    <label  className="labelInput" id='ConfirmPassword' >Confirm Pass...</label>
                </div>
                <button onClick={()=> ViewPassword(false)}><span id='ViewPasswordTwo'><CiRead size={25}/></span> <span id='NoViewPasswordTwo'><CiUnread size={25}/></span></button>
            </div>
            <div className='PasswordStrong'>
                <span>Força da senha:</span>
                <div id='passwordStrongIndicator'>
                    <span id='passwordWeak'>fraca<CiFaceFrown/></span>  <span id='passwordMedium'>Média <CiFaceMeh/> </span>  <span id='passwordStrong'>Forte <CiFaceSmile/> </span>
                </div>
            </div>
        </main>
    );
  }
  
export default FormOne;