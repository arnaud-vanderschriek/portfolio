import React, { useEffect, useState } from 'react';
import "../../assets/sass/LoadingPage.scss"
import Portfolio from '../portfolio/Portfolio';


function LoadingPage() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        },10000);
    }, [])

   return (
    
    <div id="loadingPage">

    { loading ?  
        <div>
            <div className="grid"></div>
            <div className="lines"></div>
            <h1>
                <span>PORTFOLIO</span>
                <span>PORTFOLIO</span>  
            </h1>
            <h2>Vanderschrieck Arnaud</h2> 
            <h3>Full stack</h3> 
        </div>
    : (<Portfolio />)
    }
    </div> 
   )
   }


export default LoadingPage;