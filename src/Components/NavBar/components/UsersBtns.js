import './../Navbar.css'
import {BiBrightnessHalf, BiAdjust, BiLogOutCircle, BiLogInCircle , BiHomeAlt2,BiBookmark ,BiShare,BiUser  } from 'react-icons/bi'
/* 

BiBrightnessHalf Light Mode Icon 
BiAdjust Dark Mode Icon
BiLogOutCircle LogOut Icon
BiLogInCircle LogIn Icon
BiHomeAlt2 Home Icon
BiBookmark  Save Icon
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
            document.getElementById('TextIcon').innerText = 'Light'

            document.getElementById('darkIconSmall').style.display = 'none'
            document.getElementById('lightIconSmall').style.display = 'flex'
            document.getElementById('TextIconSmall').innerText = 'Light'
        }else{
            window.localStorage.setItem('Mode', 'dark')
            document.getElementById('lightIcon').style.display = 'none'
            document.getElementById('darkIcon').style.display = 'flex'
            document.getElementById('html').setAttribute('class', 'dark')
            document.getElementById('TextIcon').innerText = 'Dark'

            document.getElementById('darkIconSmall').style.display = 'flex'
            document.getElementById('lightIconSmall').style.display = 'none'
            document.getElementById('TextIconSmall').innerText = 'Dark'
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

    var buttonLoginSmall = (
        <button onClick={()=> hrefFunc('/login')} id='LoginBtnSmall'><BiLogInCircle size={20}/> log in </button>
    )
    var ButtonSessionSmall = (
        <>
            <button onClick={()=> hrefFunc('/profile')} id='profileBtnSmall'><BiUser size={20}/> Profile</button>
            <button onClick={()=> hrefFunc('sair')} id='sessionButtonSmall'><BiLogOutCircle size={20}/> Exit </button>
        </>
    )

    function testSession(){
        if(window.sessionStorage.getItem('session') === 'on'){
            document.getElementById("LoginBtn").style.display= 'none'
            document.getElementById("LoginBtnSmall").style.display= 'none'
        }else{
            document.getElementById("profileBtn").style.display= 'none'
            document.getElementById("sessionButton").style.display= 'none'

            document.getElementById("profileBtnSmall").style.display= 'none'
            document.getElementById("sessionButtonSmall").style.display= 'none'
            
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
   function setMode(){
        var Mode = window.localStorage.getItem('Mode')
        if(Mode === 'light'){
            document.getElementById('darkIcon').style.display = 'none'
            document.getElementById('lightIcon').style.display = 'flex'
            document.getElementById('TextIcon').innerText = 'Light'

            document.getElementById('darkIconSmall').style.display = 'none'
            document.getElementById('lightIconSmall').style.display = 'flex'
            document.getElementById('TextIconSmall').innerText = 'Light'
        }else{
            document.getElementById('darkIcon').style.display = 'flex'
            document.getElementById('lightIcon').style.display = 'none'
            document.getElementById('TextIcon').innerText = 'Dark'

            document.getElementById('darkIconSmall').style.display = 'flex'
            document.getElementById('lightIconSmall').style.display = 'none'
            document.getElementById('TextIconSmall').innerText = 'Dark'
        }
   }
   setTimeout(setMode,10)

    return (
        <div className='Account'>
            <div className='largeNavBar'>
                <button onClick={()=> hrefFunc('/')}> <BiHomeAlt2 size={20}/> Home</button>
                <button onClick={()=> hrefFunc('/saves')}><BiBookmark size={20} /> Saves</button>
                <button onClick={()=> EditMode()}><span  id='darkIcon'><BiAdjust size={20} /></span> <span id='lightIcon'><BiBrightnessHalf size={20} /></span> <span id='TextIcon'>Mode</span></button>
                <button onClick={()=> hrefFunc('share')}><BiShare size={20}/> Share </button>
                {ButtonSession}
                {buttonLogin}
            </div>
            <div className='SmallNavBar'>
                <div className='BtnOpenSmallNavbar'>
                    <input type="checkbox" name='menu_checkbox' id="menu_checkbox"/>
                    <label for="menu_checkbox">
                    <div></div>
                    <div></div>
                    <div></div>
                    </label>
                </div>
                <div className='SmallNavBarBtns'>
                    <button onClick={()=> hrefFunc('/')}> <BiHomeAlt2 size={20}/> Home</button>
                    <button onClick={()=> hrefFunc('/saves')}><BiBookmark size={20} /> Saves</button>
                    <button onClick={()=> EditMode()}><span  id='darkIconSmall'><BiAdjust size={20} /></span> <span id='lightIconSmall'><BiBrightnessHalf size={20} /></span> <span id='TextIconSmall'>Mode</span></button>
                    <button onClick={()=> hrefFunc('share')}><BiShare size={20}/> Share </button>
                    {buttonLoginSmall}
                    {ButtonSessionSmall}
                </div>
            </div>
        </div>
    )
}

export default AccountNavbar