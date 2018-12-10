import React, { Component } from 'react';
import AboutBar from '../../components/Home/AboutBar/AboutBar';
import IntroBar from '../../components/Home/IntroBar/IntroBar';
import ThemeChanger from '../../components/Home/ThemeChanger/ThemeChanger';
import BackgroundLogo from '../../components/Home/BackgroundLogo/BackgroundLogo';

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
                {this.state.width > 1030
                ?   <div>
                        <IntroBar/>
                        <AboutBar/>   
                        <BackgroundLogo/>
                        <ThemeChanger/>
                        <br/>
                    </div>
                :
                    <div>
                        <BackgroundLogo/>
                        <IntroBar/>
                        <AboutBar/>   
                        <ThemeChanger/>
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
