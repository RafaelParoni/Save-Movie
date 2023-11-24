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
import Background from './Components/Background/Background';
import DetailsPage from './Pages/DetailsMovie/Details';
import SavesPage from './Pages/Saves/Saves';


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




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Background/>
    <Routes>
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


