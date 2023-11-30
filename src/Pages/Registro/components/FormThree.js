import './../Registro.css';
import {CiFaceSmile, CiCircleCheck} from 'react-icons/ci'

function FormThree() {

    
    var Language = {
        msg1: "It looks like we've reached the end!",
        msg2: 'Confirm the data and accept our terms of service (does not exist)',
        msg3: 'before completing!',
        correctData: 'Correct data',
        serviceTerms: 'Service Terms (does not exist)',
   
    }
    
    function setLanguage(){
        if(window.location.pathname.includes("/pt/")){
            Language = {
                msg1: 'Parece que chegamos ao fim!',
                msg2: 'Confirme os dados e aceite nossos termos de serviço (não existentes)',
                msg3: 'antes de concluir!',
                correctData: 'Dados corretos',
                serviceTerms: 'Termos de serviço  (não existente)',
               
            }
        }
    }
    setLanguage()

    return (
        <div  id='Form-Three' className='FormRegisterValues'>
            <div className='intrucoes'>
                <h4>{Language.msg1} <CiFaceSmile size={25}/></h4>
                <h4> {Language.msg2}  </h4>
                <h4> {Language.msg3} <CiCircleCheck size={25}/> </h4>
            </div>
            <div id='loadDatas' className='userData'>
                <div><input type='checkbox'  id='DataCheck'/> <span>{Language.correctData}</span></div>
                <div><input type='checkbox'  id='TermosCheck'/> <span>{Language.serviceTerms}</span></div>
            </div>
        </div>
    );
  }
  
export default FormThree;