import React from 'react';
import logo from '../../../assets/AC-Logo.svg';
import '../../../css/BackgroundLogo.css';

const BackgroundLogo = () => {
    return(
        <div className="" id = 'background-plate'>
            <img className = 'BackgroundLogo' alt='logo' src = {logo}/>
            <p id='welcome'>Welcome</p>
                
            <div className="intro">
            <p id='intro'>to the Grand</p><p id='portfolio'> Portfolio!</p>
            </div>
        </div>

    );
}


export default BackgroundLogo;