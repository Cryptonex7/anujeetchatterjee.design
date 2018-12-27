import React, { Component } from 'react';
import MusicList from '../../components/Music/MusicList.js'
import { YT_DATA_API_KEY } from "../../constants";

import MusicFeaturedList from "../../components/Music/MusicFeaturedList"
import "../../css/MusicCard.css";



class Music extends Component {
    constructor(props){
        super();
        this.state = {
            MusicData: []
        }
    }

    setURL = (id, key) =>{
        return `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${id}&maxResults=50&key=${key}`;
    }

    componentDidMount() {
        fetch(this.setURL("PLhX689A0mXH24GxnPzkaZAcyAi5Gla56I", YT_DATA_API_KEY))
            .then(res => res.json())
            .then(data => this.setState({MusicData: data.items}));
        }
        
    render(){
        return(
            <div className="maincont">
                <div id='head-grid'>
                    <h1>My Musical Journey</h1>
                    <p id="content">
                        I am very fortunate to be born in a family of musical background. I have been involved in 
                        various forms of music since my childhood days. I sing and also play the Keyboard(Piano and other key based instruments), Guitar, Drums, 
                        Tabla(and most of the Indian percussion instruments), Cajon, and I do have an interest for unconventional music styles and I love playing 
                        any kind of percussion the most. My favourite music genre is Indian-Classical Fusion (or Indo-Western Fusion). In conventional forms of music
                        I am a fan of Rock - favourite bands being Queen, Pink Floyd, Led Zeppelin, and artists including Bon Jovi, Bryan Adams and more.
                    </p>
                    <MusicFeaturedList className="feat-card" list= {this.state.MusicData}/>
                </div>
                <div className="grid-container">
                    <MusicList list= {this.state.MusicData}/>
                </div>
            </div>
        );
    }
}

export default Music;
