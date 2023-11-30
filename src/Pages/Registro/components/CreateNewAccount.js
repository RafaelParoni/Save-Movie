import './../Registro.css';

import { initializeApp } from "firebase/app";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import { FIREBASE_KEY } from '../../../Components/Functions/keys/importKey';
import bcrypt from "bcryptjs-react";

import { profileImg } from './FormTwo';

const firebaseApp = initializeApp({
    apiKey: FIREBASE_KEY,
    authDomain: "savemovie-e7ea6.firebaseapp.com",
    projectId: "savemovie-e7ea6",
    storageBucket: "savemovie-e7ea6.appspot.com",
    messagingSenderId: "613203193395",
    appId: "1:613203193395:web:8430b6069114d133157d46",
    measurementId: "G-GV5GW3T3ZV"
});

const db = getFirestore(firebaseApp);
const userCollectionRef = collection(db, 'users');



export async function StartNewAccont(){

    
    CreateNewAccountFunciton()
    var progess = document.getElementById('progress')
    var progressText = document.getElementById('progressText')
    progess.style.width =  '25%'
    var i = 0
    while(i < 26){
        progressText.innerHTML = i + '%'
        i++
    }
}

async function CreateNewAccountFunciton(){
    const data = await getDocs(userCollectionRef);
    console.log(data.docs.map((doc) => ({...doc.data(), id: doc.id})))

    var progess = document.getElementById('progress')
    var progressText = document.getElementById('progressText')

    let Email = document.getElementById('email').value
    let Password = document.getElementById('password').value
    let Name = document.getElementById('name').value
    let Img = profileImg().Url
    let Termos = document.getElementById('TermosCheck').checked

    var i = 0
    while(i < data.docs.map((doc) => ({...doc.data(), id: doc.id})).length){
        if(Email === data.docs.map((doc) => ({...doc.data(), id: doc.id}))[i].Email){
            console.log('Email já registrado: ' + data.docs.map((doc) => ({...doc.data(), id: doc.id}))[i].Email)
                alert('Email já cadastrado: ' + + data.docs.map((doc) => ({...doc.data(), id: doc.id}))[i].Email)
                document.getElementById('Form-One').style.display = 'flex'
                document.getElementById('Form-Two').style.display = 'none'
                document.getElementById('Form-Three').style.display = 'none'
                document.getElementById('BtnStage').style.display = 'flex'
                document.getElementById('ProgressBar').style.display = 'flex'
                document.getElementById('LoadDiv').style.display = 'none'
            return
        }
        i++
    }
    progess.style.width =  '50%'
    while(i < 51){
        progressText.innerHTML = i + '%'
        i++
    }
    const salt = bcrypt.genSaltSync(10);
    const Passcrypt = bcrypt.hashSync(Password, salt);

    progess.style.width =  '75%'
    while(i < 76){
        progressText.innerHTML = i + '%'
        i++
    }
    const user = await addDoc(userCollectionRef, {
        Email,
        Name, 
        Passcrypt,
        Img,
        Termos,
    });  
    console.log(user.id)
    window.localStorage.clear()
    window.localStorage.setItem('Mode', 'light')
    window.localStorage.setItem('login', Email)
    window.localStorage.setItem('imgProfile', Img)
    window.localStorage.setItem('name', Name)
    window.localStorage.setItem('id', user.id)
    window.sessionStorage.setItem('session', 'on')

    progess.style.width =  '100%'
    while(i < 101){
        progressText.innerHTML = i + '%'
        i++
    }

    setTimeout(function(){
        window.location = '/'
    }, 1000)
}

function CreateNewAccount() {


    var Language = {
        creating: 'Creating the account!'

   
    }
    
    function setLanguage(){
        if(window.location.pathname.includes("/pt/")){
            Language = {
                creating: 'Criando sua conta!'
               
            }
        }
    }
    setLanguage()

    
    return (
        <div id='LoadDiv' className='LoadingDiv'>
            <h3>{Language.creating}</h3>
            <h4 id='progressText' >0%</h4>
            <div id='progress' className='progressLoading'/>
        </div>
    );
  }
  
export default CreateNewAccount;