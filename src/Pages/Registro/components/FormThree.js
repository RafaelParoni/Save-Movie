import './../Registro.css';
import {CiFaceSmile, CiCircleCheck} from 'react-icons/ci'

function FormThree() {

    return (
        <div  id='Form-Three' className='FormRegisterValues'>
            <div className='intrucoes'>
                <h4>Parece que chegamos no final! <CiFaceSmile size={25}/></h4>
                <h4> Confime  os dados e aceitos nosso termos de serviço </h4>
                <h4>antes de concluir!<CiCircleCheck size={25}/> </h4>
            </div>
            <div id='loadDatas' className='userData'>
                <div><input type='checkbox'  id='DataCheck'/> <span>Dados corretos?</span></div>
                <div><input type='checkbox'  id='TermosCheck'/> <span>Termos de serviço</span></div>
            </div>
        </div>
    );
  }
  
export default FormThree;