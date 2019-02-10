import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Routes from './routes';
import Footer from './components/footer';
import mainLogo from './img/logo.svg';
// import './style.sass';

import './App.sass';

class App extends Component {
  state = {isActive: false}
  handleEvent = () => {
    if(this.state.isActive) {
      this.setState({isActive: false})
    } else {
      this.setState({isActive: true})
    }
  };

  render() {
    const location = window.location.pathname;
    return (
      <div className='wrapper'>
        <div onClick={this.handleEvent} className={this.state.isActive ? 'nav active-sidebar-menu' : 'nav'}>
          <div className="nav-wrapper">
            <Link to='/' className="logo-top">
              <img src={mainLogo} alt="logo-top" />
            </Link>
            <div className="menu-column">
              <div className={location === '/' ? "menu-item active-menu-item" : 'menu-item'}>
                <Link to='/'>
                  <div className="menu-icon-wrapper">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home"
                      className="svg-inline--fa fa-home fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512">
                      <path fill="currentColor"
                        d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
                    </svg>
                  </div>
                  <span>Home</span>
                </Link>
              </div>
              <div className={location === '/about' ? "menu-item active-menu-item" : 'menu-item'}>
                <Link to='/about'>
                  <div className="menu-icon-wrapper">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user"
                      className="svg-inline--fa fa-user fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512">
                      <path fill="currentColor"
                        d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                    </svg>
                  </div>
                  <span>About Me</span>
                </Link>
              </div>
              <div className={location === '/skills' ? "menu-item active-menu-item" : 'menu-item'}>
                <Link to='/skills'>
                  <div className="menu-icon-wrapper">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="brain"
                      className="svg-inline--fa fa-brain fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512">
                      <path fill="currentColor"
                        d="M208 0c-29.87 0-54.74 20.55-61.8 48.22-.75-.02-1.45-.22-2.2-.22-35.34 0-64 28.65-64 64 0 4.84.64 9.51 1.66 14.04C52.54 138 32 166.57 32 200c0 12.58 3.16 24.32 8.34 34.91C16.34 248.72 0 274.33 0 304c0 33.34 20.42 61.88 49.42 73.89-.9 4.57-1.42 9.28-1.42 14.11 0 39.76 32.23 72 72 72 4.12 0 8.1-.55 12.03-1.21C141.61 491.31 168.25 512 200 512c39.77 0 72-32.24 72-72V205.45c-10.91 8.98-23.98 15.45-38.36 18.39-4.97 1.02-9.64-2.82-9.64-7.89v-16.18c0-3.57 2.35-6.78 5.8-7.66 24.2-6.16 42.2-27.95 42.2-54.04V64c0-35.35-28.66-64-64-64zm368 304c0-29.67-16.34-55.28-40.34-69.09 5.17-10.59 8.34-22.33 8.34-34.91 0-33.43-20.54-62-49.66-73.96 1.02-4.53 1.66-9.2 1.66-14.04 0-35.35-28.66-64-64-64-.75 0-1.45.2-2.2.22C422.74 20.55 397.87 0 368 0c-35.34 0-64 28.65-64 64v74.07c0 26.09 17.99 47.88 42.2 54.04 3.46.88 5.8 4.09 5.8 7.66v16.18c0 5.07-4.68 8.91-9.64 7.89-14.38-2.94-27.44-9.41-38.36-18.39V440c0 39.76 32.23 72 72 72 31.75 0 58.39-20.69 67.97-49.21 3.93.67 7.91 1.21 12.03 1.21 39.77 0 72-32.24 72-72 0-4.83-.52-9.54-1.42-14.11 29-12.01 49.42-40.55 49.42-73.89z"></path>
                    </svg>
                  </div>
                  <span>Skills</span>
                </Link>
              </div>
              <div className={location === '/portfolio' ? "menu-item active-menu-item" : 'menu-item'}>
                <Link to='/portfolio'>
                  <div className="menu-icon-wrapper">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="suitcase"
                      className="svg-inline--fa fa-suitcase fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512">
                      <path fill="currentColor"
                        d="M128 480h256V80c0-26.5-21.5-48-48-48H176c-26.5 0-48 21.5-48 48v400zm64-384h128v32H192V96zm320 80v256c0 26.5-21.5 48-48 48h-48V128h48c26.5 0 48 21.5 48 48zM96 480H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h48v352z"></path>
                    </svg>
                  </div>
                  <span>Portfolio</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="content-right">
          <div className="content-right-wrapper">
            <div onClick={this.handleEvent} className="btn btn-primary nav-mobile-btn"
            autoComplete="off">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
              className="svg-inline--fa fa-bars fa-w-14"
              role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor"
                  d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
            </svg>
            </div>
            <Routes />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;