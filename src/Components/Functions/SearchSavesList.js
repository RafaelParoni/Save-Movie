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


export async function SearchSavesList(){
    if(window.sessionStorage.getItem('session') === 'on'){
        const db = getFirestore(firebaseApp);
        var collectionUser = 'saves-' + window.localStorage.getItem('id')
        const UserDb = collection(db, collectionUser);

        const data = await getDocs(UserDb);
        var SavesList = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
        return SavesList

        //await setDoc(doc(db, collectionUser, id.toString()), MovieHistory);
    }
}