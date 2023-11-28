// Banco de dados
import { initializeApp   } from "firebase/app";
import {collection, getDocs, getFirestore, setDoc, doc} from "firebase/firestore";
import { FIREBASE_KEY } from "./keys/importKey";
const firebaseApp = initializeApp({
    apiKey: FIREBASE_KEY,
    authDomain: "savemovie-e7ea6.firebaseapp.com",
    projectId: "savemovie-e7ea6",
    storageBucket: "savemovie-e7ea6.appspot.com",
    messagingSenderId: "613203193395",
    appId: "1:613203193395:web:8430b6069114d133157d46",
    measurementId: "G-GV5GW3T3ZV"
});


export async function SaveHistory(MovieName){
    var MovieHistory = {
        name: MovieName
    }
    if(window.sessionStorage.getItem('session') === 'on'){
        const db = getFirestore(firebaseApp);
        var collectionUser = 'history-' + window.localStorage.getItem('id')
        const HistoryUserID = collection(db, collectionUser);

        const data = await getDocs(HistoryUserID);
        var HistoryUser = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
        var id = HistoryUser.length + 1
        if(HistoryUser.length > 9){
            id = HistoryUser.length - Math.floor((Math.random() * 10) + 1)
        }
        await setDoc(doc(db, collectionUser, id.toString()), MovieHistory);
    }
}