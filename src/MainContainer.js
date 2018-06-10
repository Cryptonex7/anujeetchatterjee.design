import React, { Component } from 'react';
import AboutBar from './AboutBar';
import IntroBar from './IntroBar';
import ThemeChanger from './ThemeChanger';
import NavBar from './NavBar';
import BackgroundLogo from './BackgroundLogo';





class MainContainer extends Component {
    onColorChangeR =()=>{
        console.log("press");
        let x = document.getElementsByTagName("html")[0];
        x.style.cssText = "--ac-primary: #BF0000" ;
        console.log(x.style);
    }
    onColorChangeG =()=>{
        console.log("press");
        let x = document.getElementsByTagName("html")[0];
        x.style.cssText = "--ac-primary: #00BF00" ;
        console.log(x.style);
    }
    onColorChangeB =()=>{
        console.log("press");
        let x = document.getElementsByTagName("html")[0];
        x.style.cssText = "--ac-primary: #0000BF" ;
        console.log(x.style);
    }

    render(){

        
        return(
            <div className="maincont">

                <IntroBar/>
                <AboutBar/>   
                <BackgroundLogo/>
                <ThemeChanger onClickR={this.onColorChangeR} onClickG={this.onColorChangeG} onClickB={this.onColorChangeB}/>
                
                <br/>
                
            </div>
        );
    }
}

export default MainContainer;