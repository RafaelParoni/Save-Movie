import './../Login.css';
import {CiApple} from 'react-icons/ci'
import bcrypt from "bcryptjs-react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { FIREBASE_KEY } from '../../../Components/Functions/keys/importKey';

import { ProfileInfo } from '../../../Components/Functions/Firebase/ProfileInfo';

const firebaseApp = initializeApp({
    apiKey: FIREBASE_KEY,
    authDomain: "savemovie-e7ea6.firebaseapp.com",
    projectId: "savemovie-e7ea6",
    storageBucket: "savemovie-e7ea6.appspot.com",
    messagingSenderId: "613203193395",
    appId: "1:613203193395:web:8430b6069114d133157d46",
    measurementId: "G-GV5GW3T3ZV"
});


function LoginFunciton() {

    var Language = {
        login: 'Log In',
        password_error: ' wrong password',
        email_error: ' incorrect e-mail',
        noPassword_error: ' put a password!',
        noEmail_error: ' put an e-mail',
   
    }
    
    function setLanguage(){
        if(window.location.pathname.includes("/pt/")){
            Language = {
                login: 'Entrar',
                password_error: ' senha incorreta',
                email_error: ' e-mail incorreto',
                noPassword_error: 'coloque uma senha!',
                noEmail_error: 'coloque um e-mail!',
               
            }
        }
    }
    setLanguage()


    const db = getFirestore(firebaseApp);
    const userCollectionRef = collection(db, 'users');


    var login = ''
    var password = ''

    function loginAccont(){

        if(document.getElementById('loginType1').style.display === 'flex'){
            login = document.getElementById('LoginFormOne').value
            password = document.getElementById('PasswordFormOne').value
        }else{
            login = document.getElementById('LoginFormTwo').value
            password = document.getElementById('PasswordFormTwo').value
        }

        if(login === '' || login === null || login === undefined){
            document.getElementById('error-divType1').style.display = 'flex'
            document.getElementById('error-spanType1').innerText = Language.noEmail_error

            document.getElementById('error-divType2').style.display = 'flex'
            document.getElementById('error-spanType2').innerText = Language.noEmail_error
            return
        }

        if(password === '' || password === null || password === undefined){
            document.getElementById('error-divType1').style.display = 'flex'
            document.getElementById('error-spanType1').innerText = Language.noPassword_error

            document.getElementById('error-divType2').style.display = 'flex'
            document.getElementById('error-spanType2').innerText = Language.noPassword_error
            return
        }

        EmailTest(login)

    }
    async function EmailTest(login){
        const data = await getDocs(userCollectionRef);
        var i = 0
        while(i < data.docs.map((doc) => ({...doc.data(), id: doc.id})).length){
            if(login === data.docs.map((doc) => ({...doc.data(), id: doc.id}))[i].Email){
                PasswordTest(data.docs.map((doc) => ({...doc.data(), id: doc.id}))[i])
                return (data.docs.map((doc) => ({...doc.data(), id: doc.id}))[i])
            }
            i++
        }
        if( i ===  data.docs.map((doc) => ({...doc.data(), id: doc.id})).length){
            document.getElementById('error-divType1').style.display = 'flex'
            document.getElementById('error-spanType1').innerText = Language.email_error

            document.getElementById('error-divType2').style.display = 'flex'
            document.getElementById('error-spanType2').innerText = Language.email_error
            //alert('Email não encontrado')
            return(false)
        }


    }

    async function updateData(){
        var id = window.localStorage.getItem('id')
        await ProfileInfo(id).then(function(result){
            window.localStorage.setItem('imgProfile', result.Img)
            window.localStorage.setItem('login', result.Email)
            window.localStorage.setItem('name', result.Name)
        })

    }

    async function PasswordTest(user){
        var passwordCrypt  = user.Passcrypt
        if(bcrypt.compareSync(password, passwordCrypt)){ 
            window.localStorage.setItem('login', user.Email)
            window.localStorage.setItem('imgProfile', user.Img)
            window.localStorage.setItem('name', user.Name)
            window.localStorage.setItem('id', user.id)
            window.sessionStorage.setItem('session', 'on')
            updateData()
        
            window.history.back()
            return
        }else{
            document.getElementById('error-divType1').style.display = 'flex'
            document.getElementById('error-spanType1').innerText = Language.password_error

            document.getElementById('error-divType2').style.display = 'flex'
            document.getElementById('error-spanType2').innerText = Language.password_error
            return
        }
    }


    return (
        <button className='BtnLogin' onClick={()=> loginAccont()}> <CiApple size={20}/> {Language.login}</button>
    );
  }
  
  export default LoginFunciton;