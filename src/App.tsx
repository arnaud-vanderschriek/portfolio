import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingPage from './components/loadingPage/LoadinPage';
import Portfolio from './components/portfolio/Portfolio';
import Front from './components/front/Front';
import Back from './components/back/Back';
import "./assets/sass/App.scss"

function App() {
   const [loading, setLoading] = useState(false);
    useEffect(() => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      },10000);
  }, [])
   
   return (
    <div>
          <Router>
            <Routes>

              
                <Route path="/" element={ <LoadingPage />} />
              
              <Route path='/front' element={ <Front />} />
              <Route path='/back' element={ <Back />} />
            </Routes>
          </Router>
      
    </div>
  );
}

export default App;
