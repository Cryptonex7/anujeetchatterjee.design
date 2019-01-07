import React, { Component } from 'react';
import { connect } from 'react-redux';
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
  // componentDidMount () {
  //   fetch('https://ac-server.herokuapp.com/')
  //     .then(response => response.json())
  //     .then(console.log)
    
  // } //--------------PRODUCTION

  componentDidMount () {
    fetch('http://localhost:3000/') ////change localhost to 192.168.99.100 whne using docker contaier
      .then(console.log)
    
  } //_----------------------DEVELOPMENT

  render() {
		const { onPageChange } = this.props;
    return (
      <BrowserRouter>
        <div className="App">
          <NavBarResp navPage = {onPageChange}/>
          <Router/>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
