import React from 'react';
import '../../../css/NavBar.css';


const NavBar = ({home, web, music}) => {
    return(
        <div className="nav ph5-ns">
          
          <div className="page-title v-mid">
            #<span className="gray-text">the</span>Grand<span className="red-text">Portfolio</span>
          </div>
          
          
          <div className="link-container v-mid">
            <a className="link dim mr4-ns nav-active"  id='home'       onClick={home} >Home</a>
            <a className="link dim mr4-ns"  id='web'        onClick={web} >Web Design</a>
            <a className="link dim"         id='music'      onClick={music} >Music</a>
          </div>
        </div>

    );
}

export default NavBar; 