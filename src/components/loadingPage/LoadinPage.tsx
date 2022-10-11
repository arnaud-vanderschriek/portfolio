import React, { useEffect, useState } from 'react';
import "../../assets/sass/LoadingPage.scss"


function LoadingPage() {

   return (
    <div id="loadingPage">
        <div className="grid"></div>
        <div className="lines"></div>
        <h1>
            <span>PORTFOLIO</span>
            <span>PORTFOLIO</span>  
        </h1>
        <h2>Vanderschrieck Arnaud</h2> 
        <h3>Web dev full stack</h3>
    </div>
   ) 
}


export default LoadingPage;