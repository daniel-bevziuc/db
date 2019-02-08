import React, { Component } from 'react';
import Routes from './routes';
import Header from './components/header';
import Footer from './components/footer';

import './App.sass';

class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <Header />
        <div className="content-right">
          <div className="content-right-wrapper">
            <Routes />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;