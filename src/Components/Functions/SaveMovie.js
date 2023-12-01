// Banco de dados
import { initializeApp   } from "firebase/app";
import { getFirestore, setDoc, doc, deleteDoc} from "firebase/firestore";
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




export async function SaveMovie(NameMovie, IdMovie, PosterMovie, type){
    var MovieSave = {
        name: NameMovie,
        id: IdMovie,
        poster: PosterMovie,
    }
    console.log(MovieSave)
    console.log(PosterMovie)

    const db = getFirestore(firebaseApp);
    var collectionUser = 'saves-' + window.localStorage.getItem('id')
    const userDoc = doc(db, collectionUser, IdMovie)

    console.log(IdMovie)


    if(type === '2'){
        
        await deleteDoc(userDoc);
    }else{
         await setDoc(doc(db, collectionUser, IdMovie), MovieSave); // Salva um filme no bd
    }

}