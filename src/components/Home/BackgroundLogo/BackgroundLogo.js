import React from 'react';
import logo from '../../../assets/AC-Logo.svg';
import '../../../css/BackgroundLogo.css';

const BackgroundLogo = () => {
    return(
        <div className="">
            <img className = 'BackgroundLogo' alt='logo' src = {logo}/>
            <br/>
            <img className = 'caption' alt='logo' src = {capt}/>

            
            <div className="intro">
            <p id='intro'>The day Nature created the </p>&nbsp;<p id='portfolio'> Finest Person</p><p id="intro">...</p>
            </div>
            
            <br/>
        </div>

    );
}


export default BackgroundLogo;