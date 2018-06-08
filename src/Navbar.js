import React from 'react';
import './Navbar.css';
import navicon from './navicon.svg'


const Navbar = ({onSetOpen}) => {
    return(
        <div className="nav dt w-100 border-box pa3 ph5-ns">
            <a onClick={()=> onSetOpen(true)} className="dtc v-mid link dim w-25" href="" title="Home">
                <img src= {navicon} className="dib w2 h2 br-100" alt="Site Name"/>
            </a>
            <div className="dtc v-mid w-75 tr">
                <a onClick={()=> onSetOpen(true)} className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="" title="About">Services</a>
                <a onClick={()=> onSetOpen(false)} className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="" title="Store">Blog</a>
                <a onClick={()=> onSetOpen(false)} className="link dim dark-gray f6 f5-ns dib" id='joinus'href="" title="Contact">Join Us</a>
            </div>
        </div>

    );
}

export default Navbar; 