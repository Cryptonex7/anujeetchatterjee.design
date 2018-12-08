import React, { Component } from 'react';
import AboutBar from '../../components/Home/AboutBar/AboutBar';
import IntroBar from '../../components/Home/IntroBar/IntroBar';
import ThemeChanger from '../../components/Home/ThemeChanger/ThemeChanger';
import BackgroundLogo from '../../components/Home/BackgroundLogo/BackgroundLogo';




const x = document.getElementsByTagName("html")[0];

class MainContainer extends Component {

    constructor() {
        super();
        this.state = { 
          height: window.innerHeight, 
          width: window.innerWidth
        };
        this.updateDimensions = this.updateDimensions.bind(this);
    }
    
      
      componentDidMount() {
        console.log(this.state.height);
        window.addEventListener("resize", this.updateDimensions);
      }
      updateDimensions() {
        this.setState({
          height: window.innerHeight, 
          width: window.innerWidth
        });
      }

    onColorChangeR =()=>{
        console.log("press");
        x.style.cssText = "--ac-primary: #BF0000" ;
        console.log(x.style);
    }
    onColorChangeG =()=>{
        console.log("press");
        x.style.cssText = "--ac-primary: #00BF00" ;
        console.log(x.style);
    }
    onColorChangeB =()=>{
        console.log("press");
        x.style.cssText = "--ac-primary: #0000BF" ;
        console.log(x.style);
    }
    
    render(){
        return(
                <div className="maincont">
                {this.state.width > 1000
                ?   <div>
                        <IntroBar/>
                        <AboutBar/>   
                        <BackgroundLogo/>
                        <ThemeChanger onClickR={this.onColorChangeR} onClickG={this.onColorChangeG} onClickB={this.onColorChangeB}/>
                        <br/>
                    </div>
                :
                    <div>
                        <BackgroundLogo/>
                        <IntroBar/>
                        <AboutBar/>   
                        <ThemeChanger onClickR={this.onColorChangeR} onClickG={this.onColorChangeG} onClickB={this.onColorChangeB}/>
                    </div>
                }
                </div>
        );
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }
   
}

export default MainContainer;



    
    