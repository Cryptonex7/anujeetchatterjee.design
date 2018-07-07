import React, { Component } from 'react';





class MainContainer extends Component {

    constructor() {
        super();
        this.state = { 
          height: window.innerHeight, 
          width: window.innerWidth,
          title: 'no title'
        };
        this.updateDimensions = this.updateDimensions.bind(this);
    }
    
      
    componentDidMount() {
    console.log(this.state.height);
    window.addEventListener("resize", this.updateDimensions);

    fetch('https://www.googleapis.com/youtube/v3/videos?id=NsAeTAW3qRc&key=AIzaSyDiHhVKGHd-2x9m0wCu_nB90yy9Le_riNw&part=snippet,statistics&fields=items(id,snippet,statistics)')
        .then(results =>{
            return results.json();
        })  .then(title => {
                this.setState.title = title.results.videos[0].snippet.title;
            })
    }

    
      updateDimensions = () => {
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
                <h1> MUSIC PAGE </h1>
                <p id="content">{this.state.title}</p>
                </div>
            
            
        );
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }
   
}

export default MainContainer;



    
    