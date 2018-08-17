import React, { Component } from 'react';
import NavBar from '../components/Home/NavBar/NavBar';
import MainContainer from './MainContainer'
import Friends from './Friends';
import WebDesign from './WebDesign';
import '../css/App.css';

import '../css/Card.css';
import '../css/IntroBar.css';
import '../css/Subscribe.css';


class App extends Component {
  state = { 
    page: 'friends'
	}
  
	navChangePageHome = ()=> {
		this.setState({page: 'home'})
	
		let x = document.getElementById("home");
		let y = document.getElementById("friends");
		let z = document.getElementById("gallery");
		
		x.classList.add("nav-active");
		y.classList.remove("nav-active");
		z.classList.remove("nav-active");
	}

	navChangePageFriends = ()=> {
		this.setState({page: 'friends'})
		
		let x = document.getElementById("friends");
		let y = document.getElementById("gallery");
		let z = document.getElementById("home");
		
		x.classList.add("nav-active");
		y.classList.remove("nav-active");
		z.classList.remove("nav-active");
	}
	
	navChangePageGallery = ()=> {
		this.setState({page: 'gallery'})
		let x = document.getElementById("gallery");
		let y = document.getElementById("friends");
		let z = document.getElementById("home");
		
		x.classList.add("nav-active");
		y.classList.remove("nav-active");
		z.classList.remove("nav-active");
		
	}


	PAGE_STATES = {
		home: <MainContainer />,
		friends: <Friends />,
		gallery: <WebDesign />,
	};
	


  render() {
    
    return (
      <div className="App">
				<NavBar home = {this.navChangePageHome} gallery = {this.navChangePageGallery} friends = {this.navChangePageFriends}/>
        {this.PAGE_STATES[this.state.page]}
      </div>
    );
  }
}

export default App;
