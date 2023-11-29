import './../Registro.css';
import {CiAt, CiImageOn} from 'react-icons/ci'

var Url = ''

export function profileImg(){
    return{Url}
}

function FormTwo() {

    function LoadImg(evt){
        if (!(evt.target && evt.target.files && evt.target.files.length > 0)) {
            return;
        }
        var r = new FileReader();
        r.onload = function() {
            Url = r.result
        }
        document.getElementById('name-image').innerHTML = evt.target.files[0].name
        r.readAsDataURL(evt.target.files[0]);
    }

    function testeFunciton(){
        setTimeout(function(){
            document.getElementById('userImage').setAttribute('src', Url)
        },100)
    }
 

    return (
        <main id='Form-Two' className='FormRegisterValues'>
            <div className='IconInput'>
                <span><CiAt size={25} color='#f14a2c'/></span>
                <div className="inputbox">
                    <input type="text" maxLength={25} name="name" id="name" className="inputUser" required />
                    <label  className="labelInput" id='name' >Name...</label>
                </div>
            </div>
            <div className='selectImg'>
                <h4>Choose a profile photo <CiImageOn size={25}/> </h4>
                <span className="btn-file">
                Browse files...<input onChange={(evt)=> {LoadImg(evt); testeFunciton()}} type='file' accept='image/png, image/jpg' id='input-image'/>
                </span>
                <img alt='' src='' id='userImage' height={150} />
                <span id='name-image'></span>
            </div>
        </main>
    );
  }
  
export default FormTwo;