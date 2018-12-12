import React from 'react';
import { NavLink } from 'react-router-dom'
import { ROOT, WEB, MUSIC, DESIGN } from "../../../constants";

import '../../../css/NavBar.css';


const NavBar = ({navPage}) => {
    return(
        <div className="nav ph5-ns">
          
          <div className="page-title v-mid">
            #<span className="gray-text">the</span>Grand<span className="red-text">Portfolio</span>
          </div>
          
          
          <div className="link-container">
            <NavLink exact to='/anujeetchatterjee.design/'  className="link dim mr4-ns"  id={ROOT}  activeClassName="nav-active"      onClick={()=> navPage(ROOT)} >Home</NavLink>
            <NavLink to='/anujeetchatterjee.design/graphics'className="link dim mr4-ns"  id={DESIGN}activeClassName="nav-active"      onClick={()=> navPage(WEB)} >Graphic Design</NavLink>
            <NavLink to='/anujeetchatterjee.design/web'     className="link dim mr4-ns"  id={WEB}   activeClassName="nav-active"      onClick={()=> navPage(WEB)} >Web Design</NavLink>
            <NavLink to='/anujeetchatterjee.design/music'   className="link dim"         id={MUSIC} activeClassName="nav-active"      onClick={()=> navPage(MUSIC)} >Music</NavLink>

          </div>
        </div>

    );
}

export default NavBar; 