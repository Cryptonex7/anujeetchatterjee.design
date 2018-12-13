import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppSlidable from './AppSlidable';
import NavBarResp from '../components/Home/NavBar/NavBarResp'
import Router from '../Router'
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
    fetch('https://ac-server.herokuapp.com/')
      .then(response => response.json())
    
  }

  render() {
		const { page, onPageChange } = this.props;
    return (
      <BrowserRouter>
        <div className="App">
				<NavBarResp navPage = {onPageChange}/>
        <Router/>
          
          {/* <AppSlidable className= "floatright" page = {page} onPageChange = {onPageChange}/> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
