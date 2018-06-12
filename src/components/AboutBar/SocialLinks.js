import React from'react';
import Facebook from './Facebook';
import Instagram from './Instagram';
import LinkedIn from './LinkedIn';
import GooglePlus from './GooglePlus';
import YouTube from './YouTube';
import GitHub from './GitHub';

const SocialLinks =() =>{
    return(
        <div className="social">
            <h2 className="follow tc"> <span className="red-text">Follow</span> Me</h2>
            <div className="social-grid">
                <Facebook/>
                <Instagram/>
                <LinkedIn/>
                <GooglePlus/>
                <YouTube/>
                <GitHub/>
            </div>                    
        </div>        
    )
}

export default SocialLinks;


