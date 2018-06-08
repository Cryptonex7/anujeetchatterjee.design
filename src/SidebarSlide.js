import React, { Component } from 'react'
import BackgroundLogo from './BackgroundLogo';
import AboutBar from './AboutBar';
import IntroBar from './IntroBar';
import ThemeChanger from './ThemeChanger';
import { Sidebar, Segment, Menu, Icon } from 'semantic-ui-react'
import bkg from './bkg-animation.svg';
import './semantic.css';
import './Navbar.css';
import './App.css';
import './svg.css';


class SidebarSlide extends Component {
  state = { visible: false }
  
  rotations =() => {
    let x= document.getElementById("baricon-1");
    x.classList.toggle("rotate-1");
    x.classList.toggle("bar-1");

    let y= document.getElementById("baricon-2");
    y.classList.toggle("rotate-2");
    y.classList.toggle("bar-2");

  }
  toggleVisibility = () => {
    this.setState({ visible: !this.state.visible })
    this.rotations();
  }

  onColorChangeR =()=>{
    console.log("press");
    let x = document.getElementsByTagName("html")[0];
    x.style.cssText = "--ac-red: #BF0000" ;
    console.log(x.style);
  }
  onColorChangeG =()=>{
    console.log("press");
    let x = document.getElementsByTagName("html")[0];
    x.style.cssText = "--ac-red: #00BF00" ;
    console.log(x.style);
  }
  onColorChangeB =()=>{
    console.log("press");
    let x = document.getElementsByTagName("html")[0];
    x.style.cssText = "--ac-red: #0000BF" ;
    console.log(x.style);
  }

  render() {              
    const { visible } = this.state
    return (

      <div>

{/* ===========================SideBAR================SideBAR====================== */}
        <div className="SideButton">
          <div  onClick={this.toggleVisibility} className='toggle-btn side-toggle'>
            <svg  className="nav-btn" height="80px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="512px" xmlns="http://www.w3.org/2000/svg" >
              <g  className='white'>
                <g className="bar-1 trans" id ="baricon-1">
                  {/* <!-- <rect height="32" width="320" x="96" y="241"/> --> */}
                  <rect  height="320" width="32" y="96" x="190"/>
                </g>
                <g className="bar-2 trans"  id ="baricon-2">
                  <rect  height="320" width="32" y="96" x="292"/>
                </g>
              </g>
            </svg>
          </div>
        </div>
{/* =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x= */}
        
{/*=====================NAV================NAV============== */}
        <div className="nav tr dt w-90 border-box ph5-ns">
          
          <div className="page-title v-mid pa3">
            #<span className="gray-text">the</span>Grand<span className="red-text">Portfolio</span>
          </div>
          
          
          <div className="dtc v-mid pa3 w-75 tr">
            <a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="" title="About">Services</a>
            <a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="" title="Store">Blog</a>
            <a className="link dim dark-gray f6 f5-ns dib" id='joinus'href="" title="Contact">Join Us</a>
          </div>
        </div>
{/* =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x= */}

{/* ===================SideBar=======================SideBar============== */}
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='slide along' width='thin' visible={visible} icon='labeled' vertical inverted>
            <Menu.Item name='home'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item name='gamepad'>
              <Icon name='gamepad' />
              Web Design
            </Menu.Item>
            <Menu.Item name='camera'>
              <Icon name='camera' />
              Music
            </Menu.Item>
          </Sidebar>
                    {/* ===============================MAIN=====================MAIN=========================MAIN============= */}
          <Sidebar.Pusher>
            <Segment basic>
              <div className="maincont">

                  <IntroBar/>
                  <AboutBar/>   {/**/}
                  
                  <BackgroundLogo/>
                  
                  <p id='welcome'>Welcome</p>
                  
                  <div className="intro">
                    <p id='intro'>to the Grand</p><p id='portfolio'> Portfolio!</p>
                  </div>

                  <ThemeChanger onClickR={this.onColorChangeR} onClickG={this.onColorChangeG} onClickB={this.onColorChangeB}/>
                  <div className="belowspace">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                  </div>
              </div>      
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default SidebarSlide