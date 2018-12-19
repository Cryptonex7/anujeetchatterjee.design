import React, { Component } from 'react';
import DesignList from '../../components/Design/DesignList.js'

import "../../css/MusicCard.css";



class Design extends Component {
    render(){
        return(
            <div className="maincont">
                <div className="design-title">
                    #<span className="gray-text">the</span><span className="red-text">NotBehance</span>Page
                </div>                
                <p id="content">
                    I am very fortunate to be born in a family of musical background. I have been involved in 
                    various forms of music since my childhood days. I sing and also play the Keyboard(Piano and other key based instruments), Guitar, Drums, 
                    Tabla(and most of the Indian percussion instruments), Cajon, and I do have an interest for unconventional music styles and I love playing 
                    any kind of percussion the most. My favourite music genre is Indian-Classical Fusion (or Indo-Western Fusion). In conventional forms of music
                    I am a fan of Rock - favourite bands being Queen, Pink Floyd, Led Zeppelin, and artists including Bon Jovi, Bryan Adams and more.
                </p>
                <div className="grid-container">
                    <DesignList/>
                </div>
            </div>
        );
    }
}

export default Design;
