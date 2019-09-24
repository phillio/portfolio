import React, { Component } from 'react';
import { withRouter } from "react-router";

import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
