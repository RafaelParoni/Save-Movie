import { useState } from 'react';
import './../Registro.css';
import { StartNewAccont } from './CreateNewAccount';
import { profileImg } from './FormTwo';


function NewStage() {

    var Language = {
        password_error: ' wrong password',
        valid_email: ' enter a valid email',
        valid_password: ' Confirm the Password',
        noPassword_error: ' put a password!',
        noEmail_error: ' put an e-mail',
        diffrente_password: ' different passwords',
        noName_error: ' Enter a profile name!!',
        noPhoto_error: ' Upload a profile photo!',
        checkData: ' check the data entered',
        acceptTerms: ' accept the terms of service',
   
    }
    
    function setLanguage(){
        if(window.location.pathname.includes("/pt/")){
            Language = {
                password_error: ' senha incorreta',
                valid_email: ' coloque um email valido',
                valid_password: ' confirme a senha',
                noPassword_error: ' coloque uma senha!',
                noEmail_error: ' coloque um e-mail!',
                diffrente_password: ' senhas diferentes',
                noName_error: ' Coloque um nome de perfil!',
                noPhoto_error: ' Envie uma foto de perfil!',
                checkData: ' confira os dados inseridos',
                acceptTerms: ' aceite o termos de serviço',
               
            }
        }
    }
    setLanguage()


    const [stage, setStage] = useState(1)

    function NewProgess(progress){
        setStage(progress)
        switch (progress) {
            case 2:
                setStage(progress)
                document.getElementById('ProgressBarOne').style.width = '100%'
                setTimeout(function(){
                    document.getElementById('FormClicleTwo').style.backgroundColor = '#f14a2c'
                    document.getElementById('ProgressBarTwo').style.width = '50%'
                    document.getElementById('FormClicleThree').style.backgroundColor = '#4b4a4a8a'
                },1500)
                break;
            case 3:
                setStage(progress)
                document.getElementById('ProgressBarTwo').style.width = '100%'
                setTimeout(function(){
                    document.getElementById('FormClicleThree').style.backgroundColor = '#f14a2c'
                },1500)
                break;
            default:
                setStage(progress)
                setTimeout(function(){
                    document.getElementById('ProgressBarOne').style.width = '50%'
                },1500)
                setTimeout(function(){
                    document.getElementById('FormClicleTwo').style.backgroundColor = '#4b4a4a8a'
                },1000)
                document.getElementById('ProgressBarTwo').style.width = '0%'
                document.getElementById('FormClicleThree').style.backgroundColor = '#4b4a4a8a'
          }
    }

    function NewStageForm(){
        let NameInput = document.getElementById('name')
        let ImgInput = profileImg().Url
        let EmailInput = document.getElementById('email')
        let PasswordInput = document.getElementById('password')
        let PasswordConfirmInput = document.getElementById('ConfirmPassword')
        let emailValidation = /\S+@\S+\.\S+/;
        let TermosCheck = document.getElementById('TermosCheck')
        let DataCheck = document.getElementById('DataCheck')

        switch (stage) {
            case 2:
                if(!NameInput.value > 0){
                    document.getElementById('errorregister-div').style.display = 'flex'
                    document.getElementById('errorregister-span').innerText = Language.noName_error
                    return
                }
                if(ImgInput === ''){
                    document.getElementById('errorregister-div').style.display = 'flex'
                    document.getElementById('errorregister-span').innerText = Language.noPhoto_error
                    return
                }

                NewProgess(stage + 1)
                document.getElementById('errorregister-div').style.display = 'none'
                document.getElementById('Form-One').style.display = 'none'
                document.getElementById('Form-Two').style.display = 'none'
                document.getElementById('Form-Three').style.display = 'flex'
                break;
            case 3:
                if(!DataCheck.checked === true){
                    document.getElementById('errorregister-div').style.display = 'flex'
                    document.getElementById('errorregister-span').innerText = Language.checkData
                    return
                }
                if(!TermosCheck.checked === true){
                    document.getElementById('errorregister-div').style.display = 'flex'
                    document.getElementById('errorregister-span').innerText = Language.acceptTerms
                    return
                }


                document.getElementById('errorregister-div').style.display = 'none'
                document.getElementById('Form-One').style.display = 'none'
                document.getElementById('Form-Two').style.display = 'none'
                document.getElementById('Form-Three').style.display = 'none'
                document.getElementById('BtnStage').style.display = 'none'
                document.getElementById('ProgressBar').style.display = 'none'
                document.getElementById('LoadDiv').style.display = 'flex'
                StartNewAccont()
              break;
            default:
                
                if(EmailInput.value === '' || EmailInput.value === undefined){
                    document.getElementById('errorregister-div').style.display = 'flex'
                    document.getElementById('errorregister-span').innerText = Language.noEmail_error
                    return
                }
                if(!emailValidation.test(EmailInput.value)){
                    document.getElementById('errorregister-div').style.display = 'flex'
                    document.getElementById('errorregister-span').innerText = Language.valid_email
                    return
                }
                if(PasswordInput.value === '' || PasswordInput.value === undefined){
                    document.getElementById('errorregister-div').style.display = 'flex'
                    document.getElementById('errorregister-span').innerText = Language.noPassword_error

                    return
                }
                if(PasswordConfirmInput.value === '' || PasswordConfirmInput.value === undefined){
                    document.getElementById('errorregister-div').style.display = 'flex'
                    document.getElementById('errorregister-span').innerText = Language.valid_password
                    return
                }
                if(PasswordConfirmInput.value !== PasswordInput.value){
                    document.getElementById('errorregister-div').style.display = 'flex'
                    document.getElementById('errorregister-span').innerText = Language.diffrente_password
                    return
                }
    

                NewProgess(stage + 1)
                document.getElementById('errorregister-div').style.display = 'none'
                document.getElementById('Form-One').style.display = 'none'
                document.getElementById('Form-Two').style.display = 'flex'
                document.getElementById('Form-Three').style.display = 'none'
                
                
        }
       
    }

    function ReturnStageForm(){
        var newStage = stage -1
        NewProgess(newStage)
        switch(stage){
            case 2:
                document.getElementById('Form-One').style.display = 'flex'
                document.getElementById('Form-Two').style.display = 'none'
                document.getElementById('Form-Three').style.display = 'none'
                break;
            case 3: 
                document.getElementById('Form-One').style.display = 'none'
                document.getElementById('Form-Two').style.display = 'flex'
                document.getElementById('Form-Three').style.display = 'none'
                break;
            case 1:
                document.getElementById('Form-One').style.display = 'flex'
                document.getElementById('Form-Two').style.display = 'none'
                document.getElementById('Form-Three').style.display = 'none'
                break;
            default:
                document.getElementById('Form-One').style.display = 'flex'
                document.getElementById('Form-Two').style.display = 'none'
                document.getElementById('Form-Three').style.display = 'none'
                break;
        }
    }
    return (
        <div id='BtnStage'  className='NewStage'>
            {stage !== 1 && (<button onClick={()=> ReturnStageForm()}>Return</button>)}
            <button onClick={()=> NewStageForm()}>Next</button>
        </div>
    );
  }
  
export default NewStage;