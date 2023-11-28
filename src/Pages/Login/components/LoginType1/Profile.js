import './../../Login.css';
import { ProfileInfo } from '../../../../Components/Functions/Firebase/ProfileInfo';

function ProfileFomrType1() {

    var Language = {
        WelcomeBack: 'Welcome back',
   
    }
    
    function setLanguage(){
        if(window.location.pathname.includes("/pt/")){
            Language = {
                WelcomeBack: 'Bem vindo de volta!',
               
            }
        }
    }
    setLanguage()

    var userInfo = {
        'img': window.localStorage.getItem('imgProfile'),
        'name': window.localStorage.getItem('name'),
        'email': window.localStorage.getItem('login'),
    }

    async function updateData(){
        var id = window.localStorage.getItem('id')
        await ProfileInfo(id).then(function(result){
            window.localStorage.setItem('imgProfile', result.Img)
            window.localStorage.setItem('login', result.Email)
            window.localStorage.setItem('name', result.Name)
        })

    }
    updateData()

    return (
        <div className='formProfile'>
            <img alt='' src={userInfo.img} />
            <span> {Language.WelcomeBack} <h4>{userInfo.name}</h4></span>
            <p>{userInfo.email}</p>
        </div>
    );
  }
  
  export default ProfileFomrType1;