import './../../Login.css';


function ProfileFomrType1() {

    return (
        <div className='formProfile'>
            <img alt='' src={window.localStorage.getItem('imgProfile')} />
            <span> Bem vindo de volta <h4>{window.localStorage.getItem('name')}</h4></span>
            <p>{window.localStorage.getItem('login')}</p>
        </div>
    );
  }
  
  export default ProfileFomrType1;