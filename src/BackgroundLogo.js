import React from 'react';
import logo from './logo.svg';
import './BackgroundLogo.css';

const BackgroundLogo = () => {
    return(
        <img className = 'BackgroundLogo' alt='logo' src = {logo}/>
    );
}


export default BackgroundLogo;