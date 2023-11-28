import './../Navbar.css'
import {BiBrightnessHalf, BiAdjust, BiLogOutCircle, BiLogInCircle , BiHomeAlt2,BiBookmark ,BiShare,BiUser  } from 'react-icons/bi'
import { IoLanguage } from "react-icons/io5";

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
        <button onClick={()=> hrefFunc('/login')} id='LoginBtn'><BiLogInCircle size={20}/> <a id='loginL' href={false}>Log in</a> </button>
    )
    var ButtonSession = (
        <>
            <button onClick={()=> hrefFunc('/profile')} id='profileBtn'><BiUser size={20}/> <a id='profileL' href={false}>Profile</a></button>
            <button onClick={()=> hrefFunc('sair')} id='sessionButton'><BiLogOutCircle size={20}/> <a id='exitL' href={false}>Exit</a> </button>
        </>
    )

    var buttonLoginSmall = (
        <button onClick={()=> hrefFunc('/login')} id='LoginBtnSmall'><BiLogInCircle size={20}/> <a id='loginS'href={false}>Log in</a> </button>
    )
    var ButtonSessionSmall = (
        <>
            <button onClick={()=> hrefFunc('/profile')} id='profileBtnSmall'><BiUser size={20}/> <a id='profileS' href={false}>Profile</a></button>
            <button onClick={()=> hrefFunc('sair')} id='sessionButtonSmall'><BiLogOutCircle size={20}/> <a id='exitS' href={false}>Exit</a> </button>
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

   function EditText(id, text){
        document.getElementById(id).innerHTML = text
   }

   function setLanguage(){
        if(window.location.pathname.includes("/pt/")){ 
            EditText('homeL', 'Inicio')
            EditText('savesL', 'Salvos')
            EditText('shareL', 'Partilhar')
            EditText('profileL', 'Perfil')
            EditText('exitL', 'Sair')
            EditText('loginL', 'Entrar')

            EditText('homeS', 'Inicio')
            EditText('savesS', 'Salvos')
            EditText('shareS', 'Partilhar')
            EditText('profileS', 'Perfil')
            EditText('exitS', 'Sair')
            EditText('loginS', 'Entrar')
        }
        document.getElementById('language').value = window.localStorage.getItem('Language')
   }
   setTimeout(setLanguage,10)

    function EditLanguage(newLanguage){
        window.localStorage.setItem('Language', newLanguage)
        window.location.reload()
    }


    return (
        <div className='Account'>
            <div className='largeNavBar'>
                <button  onClick={()=> hrefFunc('/')}> <BiHomeAlt2 size={20}/> <a href={false} id='homeL'> Home </a></button>
                <button onClick={()=> hrefFunc('/saves')}><BiBookmark size={20} /> <a href={false} id='savesL'> Saves </a></button>
                <button  onClick={()=> hrefFunc('share')}><BiShare size={20}/> <a href={false} id='shareL'> Share </a> </button>
                {ButtonSession}
                {buttonLogin}
                <button onClick={()=> EditMode()}><span  id='darkIcon'><BiAdjust size={20} /></span> <span id='lightIcon'><BiBrightnessHalf size={20} /></span> <span id='TextIcon'> Modo</span></button>
                <label className='language-label'  for='language'><IoLanguage color='fff'/></label>
                <select onChange={(e)=> EditLanguage(e.target.value)} className='language-input' name="language" id="language">
                    <option value="pt"> pt-br</option>
                    <option value="us"> en-us</option>
                </select>
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
                    <button onClick={()=> hrefFunc('/')}> <BiHomeAlt2 size={20}/> <a href={false} id='homeS'> Home </a></button>
                    <button onClick={()=> hrefFunc('/saves')}><BiBookmark size={20} /> <a href={false} id='savesS'> Saves </a></button>
                    <button onClick={()=> EditMode()}><span  id='darkIconSmall'><BiAdjust size={20} /></span> <span id='lightIconSmall'><BiBrightnessHalf size={20} /></span> <span id='TextIconSmall'>Mode</span></button>
                    <button onClick={()=> hrefFunc('share')}><BiShare size={20}/> <a href={false} id='shareS'> Share </a> </button>
                    {buttonLoginSmall}
                    {ButtonSessionSmall}
                    <select onChange={(e)=> EditLanguage(e.target.value)} className='language-input' name="language" id="language">
                        <option value="pt">pt-br</option>
                        <option value="us"> en-us</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default AccountNavbar