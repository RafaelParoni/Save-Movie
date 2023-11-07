import './Login.css';


function LoginPage() {


    setTimeout(function TypeSelector(){
            if(window.localStorage.getItem('login') !== null){
                // Mostar Login 1 (Com conta)
                document.getElementById('loginType2').style.display = 'none'
                document.getElementById('loginType1').style.display = 'flex'
            }else{
                // Mostrar Login 2 (Sem conta)
                document.getElementById('loginType2').style.display = 'flex'
                document.getElementById('loginType1').style.display = 'none'
                
            }
        },10
    )
    
    if(window.sessionStorage.getItem('session') !== null){
        window.history.back()
        // Mandar de voltar caso tenha session ativa
        
    }
    return (
        <main className='loginPage'>
            <form id='loginType1' className='loginForm'>
                <div className='formProfile'>
                    <img alt='' src={window.localStorage.getItem('imgProfile')} />
                    <span> Bem vindo de volta <h4>{window.localStorage.getItem('name')}</h4></span>
                </div>
            </form>
            <form id='loginType2' className='loginForm'>

            </form>
        </main>
    );
  }
  
  export default LoginPage;
  