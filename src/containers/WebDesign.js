import React, { Component } from 'react';





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
                <h1> WEB DESIGN PAGE </h1>
                </div>
            
            
        );
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }
   
}

export default MainContainer;



    
    