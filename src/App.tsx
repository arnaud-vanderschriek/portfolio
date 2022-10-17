import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoadingPage from './components/loadingPage/LoadinPage';
import Front from './components/front/Front';
import Back from './components/back/Back';
import "./assets/sass/App.scss"


export const App = () => {
   return (
    <Routes>
      <Route path="/" element={<LoadingPage />} />
      <Route path='/portfolio/front' element={<Front />} />
      <Route path='/portfolio/back' element={<Back />} />
    </Routes> 
  )
}

