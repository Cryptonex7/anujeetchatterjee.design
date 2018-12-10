import React from 'react';
import { NavLink } from 'react-router-dom'
import { HOME, WEB, MUSIC } from "../../../constants";

import '../../../css/NavBar.css';


const NavBar = ({navPage}) => {
    return(
        <div className="nav ph5-ns">
          
          <div className="page-title v-mid">
            #<span className="gray-text">the</span>Grand<span className="red-text">Portfolio</span>
          </div>
          
          
          <div className="link-container v-mid">
            <NavLink to='/home'   className="link dim mr4-ns"  id={HOME}  activeClassName="nav-active"      onClick={()=> navPage(HOME)} >Home</NavLink>
            <NavLink to='/web'    className="link dim mr4-ns"  id={WEB}   activeClassName="nav-active"      onClick={()=> navPage(WEB)} >Web Design</NavLink>
            <NavLink to='/music'  className="link dim"         id={MUSIC} activeClassName="nav-active"      onClick={()=> navPage(MUSIC)} >Music</NavLink>

          </div>
        </div>

    );
}

export default NavBar; 