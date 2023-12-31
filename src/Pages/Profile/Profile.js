
// import css
import './Profile.css';


// import icons
import { BiEraser,BiConfused } from "react-icons/bi";


import { ProfileInfo } from '../../Components/Functions/Firebase/ProfileInfo';
import { updateUser } from '../../Components/Functions/Firebase/updateUser';


import { useState } from 'react';

var imgurl = ''

var profileValue = 'load'

function ProfilePage() {
    const [user, setUser] = useState([])


    async function SearchProfile(){

        if(window.sessionStorage.getItem('session') !== 'on'){
            profileValue = 'noSession'
            return
        }
        
        if(Object.keys(user).length > 0){
            return
        }
        var userInfo = {}

        await ProfileInfo(window.localStorage.getItem('id')).then(function(result){
            var userName = result.Name
            if(userName.length > 15){
                userName = userName.slice(0,15)
                userName = userName.concat("", "...")
            }
            userInfo = {
                'email': result.Email,
                'img': result.Img,
                'name': userName,
                'fullName': result.Name,
                'id': result.id,
                'termos': result.Termos,
            }
        })
        setUser(userInfo)
        profileValue = 'session'
    }
    SearchProfile()

    const [Email, setNewEmail] = useState('')
    const [Name, setNewName] = useState('')
    const [Img, setNewImg] = useState('')


    function createUrlImg(evt){
        if (!(evt.target && evt.target.files && evt.target.files.length > 0)) {
            return;
        }
        var r = new FileReader();
        r.onload = function() {
            imgurl = r.result
        }
        document.getElementById('name-image').innerHTML = evt.target.files[0].name
        r.readAsDataURL(evt.target.files[0]);
    }

    function loadImg(){
        setTimeout(function(){
            document.getElementById('userImage').setAttribute('src', imgurl)
            document.getElementById('reset-img-btn').style.display = 'flex'
            setNewImg(imgurl)
        },100)
    }
    function resetImg(){
        document.getElementById('userImage').setAttribute('src', user.img)
        document.getElementById('name-image').innerHTML = ''
        setNewImg('')
    }


    async function saveNewInfos(){

        var NewUser = {}
        if(Img !== ''){
            NewUser['Img'] = Img
        }else{
            NewUser['Img'] = user.img
        }
        if(Email !== ''){
            NewUser['Email'] = Email
        }else{
            NewUser['Email'] = user.email
        }
        if(Name !== ''){
            NewUser['Name'] = Name
        }else{
            NewUser['Name'] = user.name
        }

        await updateUser(NewUser, window.localStorage.getItem('id'))

        window.location.reload()

    }

    var Language = {
        userInfo: 'user information',
        name: 'Name: ',
        imgChoose: 'Choose a profile photo',
        browseFiles:' Browse files...',

        Here: 'here',

        // No sessions connected
        NoSession: 'No sessions connected ',
        NoSessionDescription: 'Try logging in ',

        UpdataInfo: 'Save updates',

    }
    
    function setLanguage(){
        if(window.location.pathname.includes("/pt/")){
            Language = {
                userInfo: 'informações do usuarios',
                name: 'Nome: ',
                imgChoose: 'Escolha uma foto de perfil',
                browseFiles:'Procurar arquivos...',

                Here: 'AQUI',
        
                // No sessions connected
                NoSession: 'Nenhuma conta conectada',
                NoSessionDescription: 'Tente fazer login por ',

                UpdataInfo: 'Salvar atualizações',
               
            }
        }
    }
    setLanguage()

    return (
        <>
        <main className='profile-page'>
            {profileValue === 'session' && (
                <div className='content-profile'>
                    <div className='icon-profile'>      
                        <p>{user.name}</p>
                        <img src={user.img} alt="Img profile" id='userImage'/>
                    </div>
                    <div className='details-profile'>
                        <h4>{Language.userInfo} </h4>
                        <div className='info-div'>
                            <label>Email: </label>
                            <input id='input-email' placeholder={user.email} value={Email} onChange={(e)=> setNewEmail(e.target.value)}/>
                        </div>
                        <div className='info-div'>
                            <label>{Language.name} </label>
                            <input id='input-name' placeholder={user.fullName} value={Name} onChange={(e)=> setNewName(e.target.value)}/>

                        </div>
                        <div className='info-div'>
                            <label> id: </label>
                            <input id='input-name' placeholder={user.id} disabled/>
                        </div>
                        <div className='selectImg'>
                            <h4>{Language.imgChoose} </h4>
                            <span className="btn-file">
                            {Language.browseFiles}<input onChange={(evt)=> {createUrlImg(evt); loadImg()}} type='file' accept='image/png, image/jpg' id='input-image'/>
                            </span>
                            <span id='name-image'></span>
                            <button onClick={()=> resetImg()} id='reset-img-btn'><BiEraser size={25}/></button>
                        </div>
                        <button className='save-infos' onClick={() => saveNewInfos()}>{Language.UpdataInfo}</button>
                    </div>
                </div>
            )}
            {profileValue === 'load' && (
                <div className='loading-div'>
                    <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                </div>
            )}
            {profileValue === 'noSession' && (
                <div className='no-session-div'>
                    <h2><BiConfused/> {Language.NoSession}</h2>
                    <span> {Language.NoSessionDescription} <a href='/login'>{Language.Here}</a></span>
                </div>
            )}
        </main>
        </>
    );
  }
  
  export default ProfilePage;