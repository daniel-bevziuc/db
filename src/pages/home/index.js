import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './style.sass';
import logo from './img/logo.svg';





class Home extends Component {
  render() {
    return (
      <Fragment>
        <div className="btn btn-primary nav-mobile-btn"
          autoComplete="off">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
            className="svg-inline--fa fa-bars fa-w-14"
            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="currentColor"
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
          </svg>
        </div>
        <div className="tag-text-top">
          <span className="tag-content">&#60;html&#62;</span>
          <span className="tag-content tag-content-with-spacing">&#60;body&#62;</span>
        </div>
        <div className="content">
          <div className="content-center">
            <span className="tag-content tag-content-item">&#60;h1&#62;</span>
            <h1 className="text-center"><span className="description-center">Hi, <br /> I'm <img
              src={logo} alt="" />aniel, <br /> Front End Developer.</span>
              <span className="tag-content tag-content-item">&#60;/h1&#62;</span></h1>
            <h2 className="bottom-description">UI Design Lover / ReactJS / NodeJS </h2>
            <Link to='/about' className="btn btn-primary orange-button-bottom orange-button-link">Contact me</Link>
          </div>

        </div>
        <div className="tag-text-bottom">
          <span className="tag-content tag-content-with-spacing">&#60;/body&#62;</span>
          <span className="tag-content">&#60;/html&#62;</span>
        </div>
      </Fragment>
    );
  }
}

export default Home;