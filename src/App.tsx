import React from 'react';
import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';
import LoadingPage from './components/loadingPage/LoadinPage';
import Front from './components/front/Front';
import Back from './components/back/Back';
import "./assets/sass/App.scss"


function App() {
   return (
    <Router>
      {/* <HashRouter basename='/'> */}
        <Routes>
          <Route path="/portfolio" element={ <LoadingPage />} />
          <Route path='/front' element={ <Front />} />
          <Route path='/back' element={ <Back />} />
        </Routes>
      {/* </HashRouter> */}
    </Router> 
  )
}

export default App;
