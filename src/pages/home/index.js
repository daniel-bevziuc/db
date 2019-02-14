import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './style.sass';
import TopTags from '../../components/topTags/index';
import BottomTags from '../../components/bottomTags/index';
import logo from './img/logo.svg';





class Home extends Component {
  render() {
    return (
      <Fragment>
        <TopTags />
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
        <BottomTags />
      </Fragment>
    );
  }
}

export default Home;