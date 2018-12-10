import React, { Component } from 'react';

class WebDesign extends Component {
    constructor() {
        super();
        this.state = { 
          height: window.innerHeight, 
          width: window.innerWidth
        };
        this.updateDimensions = this.updateDimensions.bind(this);
    }
      
    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
    }

    updateDimensions() {
        this.setState({
          height: window.innerHeight, 
          width: window.innerWidth
        });
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

export default WebDesign;
