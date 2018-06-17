import React, {Component} from'react';
import AboutText from '../components/Home/AboutBar/AboutText'
import SocialLinks from '../components/Home/AboutBar/SocialLinks'

class AboutBar extends Component {

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


    render(){

        return(
            <div className="AboutBar">
                    <div className="bar">
                        
                        <AboutText/>
                        <SocialLinks/>
                        
                    </div>
                
            </div>
        );
    };

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }
}

export default AboutBar;