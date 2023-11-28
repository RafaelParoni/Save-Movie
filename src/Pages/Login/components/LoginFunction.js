import './../Login.css';
import {CiApple} from 'react-icons/ci'
import bcrypt from "bcryptjs-react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

import { initializeApp } from "firebase/app";

import { ProfileInfo } from '../../../Components/Functions/Firebase/ProfileInfo';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyCi1wYTsZBEVZp2zAQquOY8mYp7ZTe3Mnw",
    authDomain: "savemovie-e7ea6.firebaseapp.com",
    projectId: "savemovie-e7ea6",
    storageBucket: "savemovie-e7ea6.appspot.com",
    messagingSenderId: "613203193395",
    appId: "1:613203193395:web:8430b6069114d133157d46",
    measurementId: "G-GV5GW3T3ZV"
});


function LoginFunciton() {

    const db = getFirestore(firebaseApp);
    const userCollectionRef = collection(db, 'users');


    var login = ''
    var password = ''

    function LoginAccontType1(){

        if(document.getElementById('loginType1').style.display === 'flex'){
            login = document.getElementById('LoginFormOne').value
            password = document.getElementById('PasswordFormOne').value
        }else{
            login = document.getElementById('LoginFormTwo').value
            password = document.getElementById('PasswordFormTwo').value
        }

        if(password === '' || password === null || password === undefined){
            alert('Senha incorreta!')
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
            alert('Email não encontrado')
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
            alert('Senha incorreta!')
            return
        }
    }

    var Language = {
        Login: 'Log In',
   
    }
    
    function setLanguage(){
        if(window.location.pathname.includes("/pt/")){
            Language = {
                Login: 'Entrar',
               
            }
        }
    }
    setLanguage()

    return (
        <button className='BtnLogin' onClick={()=> LoginAccontType1()}> <CiApple size={20}/> {Language.Login}</button>
    );
  }
  
  export default LoginFunciton;