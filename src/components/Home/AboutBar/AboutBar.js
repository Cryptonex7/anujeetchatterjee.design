import React from'react';
import AboutText from './AboutText'
import SocialLinks from './SocialLinks'

const AboutBar = () => {
    return(
        <div className="AboutBar" id = 'about-card'>
                <div className="bar">
                    <AboutText/>
                    <SocialLinks/>
                </div>
        </div>
    );
}

export default AboutBar;