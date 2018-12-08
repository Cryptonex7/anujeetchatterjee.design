import React from'react';
import Subscribe from '../../../containers/Home/Subscribe';

const IntroBar =() =>{
    return(
        <div className="IntroBar">
            <div className="intro-container">
                <div className="-intro">
                    <h1>Anujeet<span className="gray-text">Chatterjee</span>.<span className="red-text">Design</span></h1>
                </div>
                <div className="intro-bar">
                    
                    <div className="intro-content">
                        <h3>Creative &nbsp;<span className="red-text">Artist</span></h3>
                        <p>A UI/UX fanatic, implementing design fundamentals into real life situations - whenever and wherever possible.</p>
                    </div>
                </div>
                <br/>
                <Subscribe/>   
                    
            </div>
        </div>
    )
}

export default IntroBar;