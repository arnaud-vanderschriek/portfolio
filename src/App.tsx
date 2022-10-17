import React, { useEffect, useState } from 'react';
import Portfolio from './components/portfolio/Portfolio';
import "./assets/sass/App.scss"


export default function App() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        },10000);
    }, [])

   return (
    <div>
      { loading ? 
          <div id="loadingPage">
            <div className="grid"></div>
            <div className="lines"></div>
            <h1>
              <span>PORTFOLIO</span>
              <span>PORTFOLIO</span>  
            </h1>
            <h2>Vanderschrieck Arnaud</h2> 
            <h3>Full stack web dev</h3> 
          </div> 
      : (<Portfolio />)
      }
    </div>
  ) 
}

