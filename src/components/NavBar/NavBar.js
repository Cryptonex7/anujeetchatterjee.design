import React from 'react';
import '../../css/NavBar.css';


const NavBar = () => {
    return(
        <div className="nav ph5-ns">
          
          <div className="page-title v-mid">
            #<span className="gray-text">the</span>Grand<span className="red-text">Portfolio</span>
          </div>
          
          
          <div className="link-container v-mid">
            <a className="link dim mr4-ns"  id='services'   href="" title="About">Services</a>
            <a className="link dim mr4-ns"  id='blog'       href="" title="Store">Blog</a>
            <a className="link dim"         id='joinus'     href="" title="Contact">Join Us</a>
          </div>
        </div>

    );
}

export default NavBar; 