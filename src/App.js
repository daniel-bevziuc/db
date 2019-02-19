import React, { Component } from 'react';
import Routes from './routes';
import Footer from './components/footer';
import NavBar from './components/navBar/index';
import NavBtn from './components/mobileBtn/index';

import './App.sass';

class App extends Component {
  constructor() {
    super();
    this.state = {
        isActive: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
        isActive: !this.state.isActive
    });
  }

  render() {
    return (
      <div className='wrapper'>
        <NavBar
          isActive={this.state.isActive}
        />
        <div className="content-right">
          <div className="content-right-wrapper">
            <NavBtn 
              handleClick={this.handleClick}
            />
            <Routes />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;