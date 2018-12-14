
import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'
import SideButton from '../SideButton/SideButton';

import { ROOT, WEB, MUSIC, DESIGN } from "../../../constants";

import '../../../css/NavBarResp.css';




class NavBar extends Component {
  classToggle = () => {
    // const navs = document.querySelectorAll('.link-container')
    // navs.forEach(nav => nav.classList.toggle('ToggleShow'));
    document.getElementById('flex-container').classList.toggle('ToggleShow')
  }


  rotations =() => {
    let x= document.getElementById("baricon-1");
    x.classList.toggle("rotate-1");
    x.classList.toggle("bar-1");
    
    let y= document.getElementById("baricon-2");
    y.classList.toggle("rotate-2");
    y.classList.toggle("bar-2");
    
    let z= document.getElementById("baricon-3");
    z.classList.toggle("rotate-3");
    z.classList.toggle("bar-3");
    this.classToggle();
  }
  
  render(){
    const { navPage }  = this.props;
    return(
        <div className="Navbar">
            <div className="Navbar__Link Navbar__Link-brand">
                <div className="page-title">
                    #<span className="gray-text">the</span>Grand<span className="red-text">Portfolio</span>
                </div>
            </div>
            <div className="Navbar__Link Navbar__Link-toggle">
                <SideButton visibilityFunction={this.rotations}/>
            </div>
            <nav className="Navbar__Items Navbar__Items--right" id="flex-container">
                <div className="Navbar__Link">
                    <NavLink exact to='/anujeetchatterjee.design/'  className="linkStyles"  id={ROOT}  activeClassName="nav-active"      onClick={()=> navPage(ROOT)} >Home</NavLink>
                </div>
                <div className="Navbar__Link">
                    <NavLink to='/anujeetchatterjee.design/graphics'className="linkStyles"  id={DESIGN}activeClassName="nav-active"      onClick={()=> navPage(WEB)} >Graphic Design</NavLink>
                </div>
                <div className="Navbar__Link">
                    <NavLink to='/anujeetchatterjee.design/web'     className="linkStyles"  id={WEB}   activeClassName="nav-active"      onClick={()=> navPage(WEB)} >Web Design</NavLink>
                </div>
                <div className="Navbar__Link">
                    <NavLink to='/anujeetchatterjee.design/music'   className="linkStyles"         id={MUSIC} activeClassName="nav-active"      onClick={()=> navPage(MUSIC)} >Music</NavLink>
                </div>
            </nav>
        </div>
    );
  }
}

export default NavBar; 