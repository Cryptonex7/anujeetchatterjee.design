import React from 'react';
import '../../../css/NavBar.css';


const NavBar = ({home, gallery, friends}) => {
    return(
        <div className="nav ph5-ns">
          
          <div className="page-title v-mid">
            #<span className="gray-text">September</span>the<span className="red-text">10th</span>
          </div>
          
          
          <div className="link-container v-mid">
            <a className="link dim mr4-ns nav-active"  id='home'       onClick={home} >Home</a>
            <a className="link dim mr4-ns"  id='friends'        onClick={friends} >Friends</a>
            <a className="link dim"         id='gallery'      onClick={gallery} >Gallery</a>
          </div>
        </div>

    );
}

export default NavBar; 