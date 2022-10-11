import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingPage from './components/loadingPage/LoadinPage';
import Portfolio from './components/portfolio/Portfolio';
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
      {loading ? (<LoadingPage />) :
          <Router>
            <Routes>
              <Route path="/" element={<Portfolio />}/>
            </Routes>
          </Router>
      }
    </div>
  );
}

export default App;
