import { useState } from 'react';
import './../Registro.css';
import { StartNewAccont } from './CreateNewAccount';
import { UrlImr } from './FormTwo';


function NewStage() {

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
        let ImgInput = UrlImr()
        let EmailInput = document.getElementById('email')
        let PasswordInput = document.getElementById('password')
        let PasswordConfirmInput = document.getElementById('ConfirmPassword')
        let emailValidation = /\S+@\S+\.\S+/;
        let TermosCheck = document.getElementById('TermosCheck')
        let DataCheck = document.getElementById('DataCheck')

        switch (stage) {
            case 2:
                if(!NameInput.value > 0){
                    alert('coloca um nome ai fiu')
                    return
                }
                if(ImgInput === ''){
                    alert('CADE A FOTO!')
                    return
                }

                NewProgess(stage + 1)
                document.getElementById('Form-One').style.display = 'none'
                document.getElementById('Form-Two').style.display = 'none'
                document.getElementById('Form-Three').style.display = 'flex'
                break;
            case 3:
                if(!DataCheck.checked === true){
                    alert('OPA CONFERE AI OS SEUS DADOS')
                    return
                }
                if(!TermosCheck.checked === true){
                    alert('OPA CONMFIRMA AI OS TERMOS DE SERVIÇO')
                    return
                }



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
                    alert('coloque um email')
                    return
                }
                if(!emailValidation.test(EmailInput.value)){
                    alert('coloque um email valido')
                    return
                }
                if(PasswordInput.value === '' || PasswordInput.value === undefined){
                    alert('coloque uma senha')
                    return
                }
                if(PasswordConfirmInput.value === '' || PasswordConfirmInput.value === undefined){
                    alert('confirme a senha')
                    return
                }
                if(PasswordConfirmInput.value !== PasswordInput.value){
                    alert('senhas diferentes')
                    return
                }
    

                NewProgess(stage + 1)
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