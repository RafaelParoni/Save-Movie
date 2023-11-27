import './../../Login.css';


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

    return (
        <div className='formProfile'>
            <img alt='' src={window.localStorage.getItem('imgProfile')} />
            <span> {Language.WelcomeBack} <h4>{window.localStorage.getItem('name')}</h4></span>
            <p>{window.localStorage.getItem('login')}</p>
        </div>
    );
  }
  
  export default ProfileFomrType1;