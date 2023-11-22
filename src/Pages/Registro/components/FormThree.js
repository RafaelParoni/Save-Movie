import './../Registro.css';
import {CiFaceSmile, CiCircleCheck} from 'react-icons/ci'

function FormThree() {

    return (
        <div  id='Form-Three' className='FormRegisterValues'>
            <div className='intrucoes'>
                <h4>It looks like we've reached the end! <CiFaceSmile size={25}/></h4>
                <h4> Confirm the data and accept our terms of service </h4>
                <h4> before completing!<CiCircleCheck size={25}/> </h4>
            </div>
            <div id='loadDatas' className='userData'>
                <div><input type='checkbox'  id='DataCheck'/> <span>Correct data?</span></div>
                <div><input type='checkbox'  id='TermosCheck'/> <span>Service Terms</span></div>
            </div>
        </div>
    );
  }
  
export default FormThree;