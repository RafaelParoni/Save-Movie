import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

// import css
import './index.css';

// import pages
import HomePage from './Pages/Home/Home';
import NotFoundPage from './Pages/NoutFound/NotFound';
import LoginPage from './Pages/Login/Login';
import RegistroPage from './Pages/Registro/Registro';
import ProfilePage from './Pages/Profile/Profile';
import SearchMoviePage from './Pages/SearchMovie/SearchMovie';
import DetailsPage from './Pages/DetailsMovie/Details';
import SavesPage from './Pages/Saves/Saves';
import Navbar from './Components/NavBar/NavBar';


function DetectMode(){
  var Mode = window.localStorage.getItem('Mode') 
  if(Mode === null || Mode === undefined ){
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // dark mode
      document.getElementById('html').setAttribute('class', 'dark')
    }
    if (!window.matchMedia && !window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // Light mode
      document.getElementById('html').setAttribute('class', 'light')
    }
  }else{
    document.getElementById('html').setAttribute('class', Mode)
  }
} 
DetectMode()


function setLanguage(){
  if(window.localStorage.getItem('Language') === null){
    if(window.navigator.language === "pt-BR"){
      window.localStorage.setItem('Language', 'pt')
      console.log(window.location)
      window.location = '/pt/'
    }else{
      window.localStorage.setItem('Language', 'us')
    }
  }else{
    if(window.localStorage.getItem('Language') === "pt"){

      if(!window.location.pathname.includes("/pt/")){ 
        window.location = '/pt' + window.location.pathname +  window.location.search
  
      }
  
    }else{
      if(window.location.pathname.includes("/pt/")){
        var locationUs = window.location.pathname
        locationUs = locationUs.slice(3, locationUs.length)

        window.location = locationUs + window.location.search
      }
    }
  }
}
setLanguage()




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route  path='/pt/' element={<HomePage/>}/>
        <Route  path='/pt/saves' element={<SavesPage/>}/>
        <Route  path='/pt/login' element={<LoginPage/>}/>
        <Route  path='/pt/register' element={<RegistroPage/>}/>
        <Route  path='/pt/profile' element={<ProfilePage/>}/>
        <Route  path='/pt/search' element={<SearchMoviePage/>}/>
        <Route  path='/pt/details' element={<DetailsPage/>}/>
        
        <Route  path='/' element={<HomePage/>}/>
        <Route  path='/saves' element={<SavesPage/>}/>
        <Route  path='/login' element={<LoginPage/>}/>
        <Route  path='/register' element={<RegistroPage/>}/>
        <Route  path='/profile' element={<ProfilePage/>}/>
        <Route  path='/search' element={<SearchMoviePage/>}/>
        <Route  path='/details' element={<DetailsPage/>}/>

        <Route  path='*' element={<NotFoundPage/>}/>

    </Routes>
  </BrowserRouter>
);


