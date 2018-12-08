import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppSlidable from './AppSlidable';
import { setPage } from '../actions/actions';
import { BrowserRouter } from 'react-router-dom';


import '../css/App.css';
import '../css/AboutBar.css';
import '../css/IntroBar.css';
import '../css/Subscribe.css';

const mapStateToProps = state => {
  return {
    page: state.page
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPageChange: (page) => dispatch(setPage(page))
  }
}

class App extends Component {
  componentDidMount () {
    fetch('http://localhost:3001/')
      .then(response => response.json())
    
  }

  render() {
		const { page, onPageChange } = this.props;
    return (
      <BrowserRouter>
        <div className="App">
          <AppSlidable className= "floatright" page = {page} onPageChange = {onPageChange}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
