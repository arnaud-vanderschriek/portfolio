import React from 'react';
import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';
import LoadingPage from './components/loadingPage/LoadinPage';
import Front from './components/front/Front';
import Back from './components/back/Back';
import "./assets/sass/App.scss"


function App() {
   return (
    <Router>
        <Routes>
          <Route path="/portfolio " element={ <LoadingPage />} />
          <Route path='/portfolio/front' element={ <Front />} />
          <Route path='/portfolio/back' element={ <Back />} />
        </Routes>
    </Router> 
  )
}

export default App;
