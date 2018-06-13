import React, { Component } from 'react';
import SidebarSlide from './SidebarSlide';
import '../css/App.css';

import '../css/AboutBar.css';
import '../css/IntroBar.css';


class App extends Component {
  
  handleScroll = (event) => {
    console.log('handleScroll invoked');
  }

  componentDidMount = ()=> {
    console.log('componentDidMount invoked');
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount = ()=> {
    console.log('componentWillUnmount invoked');
    window.removeEventListener('scroll', this.handleScroll);
  }
  render() {
    
    return (
      <div className="App">
        <SidebarSlide className= "floatright"/>
      </div>
    );
  }
}

export default App;
