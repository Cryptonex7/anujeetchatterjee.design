import React from 'react';
import logo from './logo.svg';
import './BackgroundLogo.css';

const BackgroundLogo = () => {
    return(
        <div className="">
            <img className = 'BackgroundLogo' alt='logo' src = {logo}/>
            <p id='welcome'>Welcome</p>
                
            <div className="intro">
            <p id='intro'>to the Grand</p><p id='portfolio'> Portfolio!</p>
            </div>
            
            <br/>
            <br/>
        </div>

    );
}


export default BackgroundLogo;