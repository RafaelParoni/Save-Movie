// Banco de dados
import { initializeApp   } from "firebase/app";
import {collection, getDocs, getFirestore, setDoc, doc, deleteDoc} from "firebase/firestore";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyCi1wYTsZBEVZp2zAQquOY8mYp7ZTe3Mnw",
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

    const db = getFirestore(firebaseApp);
    var collectionUser = 'saves-' + window.localStorage.getItem('id')
    const SavesUserID = collection(db, collectionUser);
    const userDoc = doc(db, collectionUser, IdMovie)

    const data = await getDocs(SavesUserID);
    var SavesUser = data.docs.map((doc) => ({...doc.data(), id: doc.id}))

    if(type === '2'){
        
        await deleteDoc(userDoc);
    }else{
        var u = 0
         while(u < SavesUser.length){
             if(SavesUser[u].id === IdMovie ){ // Verifica se já tem um Filme salvo se se for true deleta o filme do bd
                if(!window.confirm('Deseja Deletar ' + NameMovie + ' de sua conta?')){return}
                await deleteDoc(userDoc);
                return
             }
             u++
         }
         if(!window.confirm('Deseja salvar ' + NameMovie + ' em sua conta?')){return}
         await setDoc(doc(db, collectionUser, IdMovie), MovieSave); // Salva um filme no bd
    }

}