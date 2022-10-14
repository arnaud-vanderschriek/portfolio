import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingPage from './components/loadingPage/LoadinPage';
import Front from './components/front/Front';
import Back from './components/back/Back';
import "./assets/sass/App.scss"

function App() {
   return (
      <Router>
        <Routes>
          <Route path="/" element={ <LoadingPage />} />
          <Route path='/front' element={ <Front />} />
          <Route path='/back' element={ <Back />} />
        </Routes>
      </Router>
  );
}

export default App;