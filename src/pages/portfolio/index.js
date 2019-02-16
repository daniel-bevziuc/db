import React, { Component, Fragment } from 'react';
import teslaImg from './img/tesla.png';
import cartonImg from './img/carton.png';
import partImg from './img/part.png';
import womanImg from './img/tech-woman.png';
import './style.sass';
import TopTags from '../../components/topTags/index';
import BottomTags from '../../components/bottomTags/index';
import PortfolioCover from './cover/index';




class Portfolio extends Component {
  render() {
    return (
      <Fragment>
       <TopTags />
        <div className="content">
          <div className="content-center content-without-padding">
            <h1 className="title-top">
              <span className="tag-content tag-content-item">&#60;h1&#62;</span>
              <span className="description-center">Portfolio</span>
              <span className="tag-content tag-content-item">&#60;/h1&#62;</span>
            </h1>
            <p className="description-text-top">
              <span className="tag-content tag-content-item">&#60;p&#62;</span>
              <span>
                Producing high quality responsive web apps and exceptional UI and UX</span>
              <span className="tag-content tag-content-item">&#60;p&#62;</span>
            </p>
          </div>
          <div className="portfolio-grid">
            <PortfolioCover  link='https://kodiri.github.io/8-days-a-week' img={womanImg} btn='View Project'/>
            <PortfolioCover  link='https://daniel-bevziuc.github.io/carton-plant/' img={cartonImg} btn='View Project'/>
          </div>
          <div className="portfolio-grid">
            <PortfolioCover  link='https://daniel-bevziuc.github.io/construction-part.github.io/' img={partImg} btn='View Project'/>
            <PortfolioCover  link='https://daniel-bevziuc.github.io/auto-agent-app/' img={teslaImg} btn='View Project'/>
          </div>
        </div>
       <BottomTags  />
      </Fragment>
    );
  }
}

export default Portfolio;