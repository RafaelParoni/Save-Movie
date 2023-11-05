import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './index.css';
import HomePage from './Pages/Home/Home';
import NotFoundPage from './Pages/NoutFound/NotFound';
import LoginPage from './Pages/Login/Login';
import RegistroPage from './Pages/Registro/Registro';
import AutoLoginPage from './Pages/Autologin/autologin';
import ProfilePage from './Pages/Profile/Profile';
import SearchMoviePage from './Pages/SearchMovie/SearchMovie';
import Background from './Components/Background/Background';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Background/>
    <Routes>
        <Route  path='/' element={<HomePage/>}/>
        <Route  path='/login' element={<LoginPage/>}/>
        <Route  path='/register' element={<RegistroPage/>}/>
        <Route  path='/autologin' element={<AutoLoginPage/>}/>
        <Route  path='/profile' element={<ProfilePage/>}/>
        <Route  path='/search' element={<SearchMoviePage/>}/>
        <Route  path='*' element={<NotFoundPage/>}/>
    </Routes>

  </BrowserRouter>
);


