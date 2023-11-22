import './../Navbar.css'
import {BiBrightnessHalf, BiAdjust, BiLogOutCircle, BiLogInCircle , BiHomeAlt2,BiBookmark ,BiShare,BiUser  } from 'react-icons/bi'
/* 

BiBrightnessHalf Light Mode Icon 
BiAdjust Dark Mode Icon
BiLogOutCircle LogOut Icon
BiLogInCircle LogIn Icon
BiHomeAlt2 Home Icon
BiHeart  Like Icon
BiUser  Perfil Icon
BiShare  Share Icon 

*/
function AccountNavbar(){



    function EditMode(){
        if(window.localStorage.getItem('Mode') === 'dark'){
            window.localStorage.setItem('Mode', 'light')
            document.getElementById('lightIcon').style.display = 'flex'
            document.getElementById('darkIcon').style.display = 'none'
            document.getElementById('html').setAttribute('class', 'light')
        }else{
            window.localStorage.setItem('Mode', 'dark')
            document.getElementById('lightIcon').style.display = 'none'
            document.getElementById('darkIcon').style.display = 'flex'
            document.getElementById('html').setAttribute('class', 'dark')
        }
    }

    var buttonLogin = (
        <button onClick={()=> hrefFunc('/login')} id='LoginBtn'><BiLogInCircle size={20}/> log in </button>
    )
    var ButtonSession = (
        <>
            <button onClick={()=> hrefFunc('/profile')} id='profileBtn'><BiUser size={20}/> Profile</button>
            <button onClick={()=> hrefFunc('sair')} id='sessionButton'><BiLogOutCircle size={20}/> Exit </button>
        </>
    )

    function testSession(){
        if(window.sessionStorage.getItem('session') === 'on'){
            document.getElementById("LoginBtn").style.display= 'none'
        }else{
            document.getElementById("profileBtn").style.display= 'none'
            document.getElementById("sessionButton").style.display= 'none'
            
        }
    }
    setTimeout(testSession,10)

    function hrefFunc(value){
        if(value === 'sair'){
            window.sessionStorage.removeItem("session")
            window.location.reload()
        }else if(value === 'share'){
            window.open('whatsapp://send?text=Confira este site incrível que encontrei de filmes e Series 😄 \n ' + window.location)
        }else{
            window.location = value
        }
    }

    return (
        <div className='Account'>
            <div className='largeNavBar'>
                <button onClick={()=> hrefFunc('/')}> <BiHomeAlt2 size={20}/> Home</button>
                <button onClick={()=> hrefFunc('/curtidos')}><BiBookmark size={20} /> Saves</button>
                <button onClick={()=> EditMode()}><span  id='darkIcon'><BiAdjust size={20} /></span> <span id='lightIcon'><BiBrightnessHalf size={20} /></span> <span id='TextIcon'>Light</span></button>
                <button onClick={()=> hrefFunc('share')}><BiShare size={20}/> Share </button>
                {ButtonSession}
                {buttonLogin}
            </div>
            <div className='SmallNavBar'>
                <h3>Small</h3>
            </div>
        </div>
    )
}

export default AccountNavbar