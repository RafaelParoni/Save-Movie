// Banco de dados
import { initializeApp   } from "firebase/app";
import {collection, getDocs, getFirestore} from "firebase/firestore";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyCi1wYTsZBEVZp2zAQquOY8mYp7ZTe3Mnw",
    authDomain: "savemovie-e7ea6.firebaseapp.com",
    projectId: "savemovie-e7ea6",
    storageBucket: "savemovie-e7ea6.appspot.com",
    messagingSenderId: "613203193395",
    appId: "1:613203193395:web:8430b6069114d133157d46",
    measurementId: "G-GV5GW3T3ZV"
});


export async function ProfileInfo(iduser){
    if(window.sessionStorage.getItem('session') === 'on'){
        const db = getFirestore(firebaseApp);
        var collectionUser = 'users'
        const userCollection = collection(db, collectionUser);

        const data = await getDocs(userCollection);
        var InfoUser = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
        var i = 0
        while(i < data.docs.map((doc) => ({...doc.data(), id: doc.id})).length){
            if(iduser === data.docs.map((doc) => ({...doc.data(), id: doc.id}))[i].id){
                InfoUser = data.docs.map((doc) => ({...doc.data(), id: doc.id}))[i]
            }
            i++
        }
        
        return InfoUser
    }
} 