import React, { Component, Fragment } from 'react';
import teslaImg from './img/tesla.png';
import cartonImg from './img/carton.png';
import partImg from './img/part.png';
import womanImg from './img/tech-woman.png';
import './style.sass';




class Portfolio extends Component {
  render() {
    return (
      <Fragment>
        <div className="tag-text-top">
          <span className="tag-content">&#60;html&#62;</span>
          <span className="tag-content tag-content-with-spacing">&#60;body&#62;</span>
        </div>
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
              Producing high quality responsive web apps and exceptional UI and UX experience.</span>
              <span className="tag-content tag-content-item">&#60;p&#62;</span>
            </p>
          </div>
          <div className="portfolio-grid">
            <div className="grid">
              <figure className="effect-lily">
                <img src={womanImg} alt="daniel-portfolio-item" />
                <figcaption>
                  <div>
                    <h2>View Project</h2>
                    <p>This App I buil on Kodiri Boot Camp</p>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="grid">
              <figure className="effect-lily">
                <img src={cartonImg} alt="daniel-portfolio-item" />
                <figcaption>
                  <div>
                    <h2>View Project</h2>
                    <p>I build that App for a Cardboard Plant</p>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="portfolio-grid">
            <div className="grid">
              <figure className="effect-lily">
                <img src={partImg} alt="daniel-portfolio-item" />
                <figcaption>
                  <div>
                    <h2>View Project</h2>
                    <p>I build that App for a Building Materials Company</p>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="grid">
              <figure className="effect-lily">
                <img src={teslaImg} alt="daniel-portfolio-item" />
                <figcaption>
                  <div>
                    <h2>View Project</h2>
                    <p>I build that App for Auto Agent</p>
                  </div>
                </figcaption>
              </figure>
            </div>
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

export default Portfolio;