import './Login.css';

// import Componentes
import {LoginType1, LoginType2} from './components/Main'; // type 1 Login com Storage
// type 2 Login sem Storage


function LoginPage() {


    setTimeout(function TypeSelector(){
        var LoginType1 = document.getElementById('loginType1')
        var LoginType = document.getElementById('loginType1')
        if(window.localStorage.getItem('login') !== null){
            // Mostar Login 1 (Com conta)
            document.getElementById('loginType2').style.display = 'none'
            document.getElementById('loginType1').style.display = 'flex'
            document.getElementById('LoginFormOne').value = window.localStorage.getItem('login')
        }else{
            //Mostrar Login 2 (Sem conta)
            document.getElementById('loginType2').style.display = 'flex'
            document.getElementById('loginType1').style.display = 'none'
                
        }
    },1)
    
    if(window.sessionStorage.getItem('session') !== null){
        window.history.back()
        // Mandar de voltar caso tenha session ativa
        
    }
    return (
        <main className='loginPage'>
            <LoginType1/>
            <LoginType2/>
        </main>
    );
  }
  
  export default LoginPage;
  