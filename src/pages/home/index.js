import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './style.sass';
import logo from './img/logo.svg';





class Home extends Component {
  render() {
    return (
      <Fragment>
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
            <Link to='/contact' className="btn btn-primary orange-button-bottom orange-button-link">Contact me</Link>
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