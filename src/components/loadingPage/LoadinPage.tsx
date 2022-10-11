import React, { useEffect, useState } from 'react';
import Portfolio from '../portfolio/Portfolio';
import "../../assets/sass/LoadingPage.scss"


function LoadingPage() {
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


export default LoadingPage;