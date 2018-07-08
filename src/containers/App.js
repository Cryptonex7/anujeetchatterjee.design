import React, { Component } from 'react';
import SidebarSlide from './SidebarSlide';
import '../css/App.css';

import '../css/AboutBar.css';
import '../css/IntroBar.css';
import '../css/Subscribe.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarOpen: false
    }

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  componentDidMount () {
    fetch('http://localhost:3001/')
      .then(response => response.json())
      .then(console.log)
  }

  onSetSidebarOpen = (open) => {
    this.setState({sidebarOpen: open});
  }


  render() {
    
    return (
      <div className="App">
        <SidebarSlide className= "floatright"/>
          {/* <div className="nav-container">
            <Navbar onSetOpen={this.onSetSidebarOpen}/>
          </div> */}
      </div>
    );
  }
}

export default App;
