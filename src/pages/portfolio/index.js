import React, { Component, Fragment } from 'react';
import teslaImg from './img/tesla.png';
import cartonImg from './img/carton.png';
import partImg from './img/part.png';
import womanImg from './img/tech-woman.png';
import './style.sass';
import TopTags from '../../components/topTags/index';
import BottomTags from '../../components/bottomTags/index';




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
            <a href='https://kodiri.github.io/8-days-a-week/' target="_blank"  rel='noreferrer noopener'>
              <div className="grid">
                <figure className="effect-lily">
                  <img src={womanImg} alt="daniel-portfolio-item" />
                  <figcaption>
                    <div>
                      <h2 className='portfolio-text' >View Project</h2>
                      {/* <p>This App I buil on Kodiri Boot Camp</p> */}
                    </div>
                  </figcaption>
                </figure>
              </div>
            </a>
            <a href='https://daniel-bevziuc.github.io/carton-plant/' target='_blank' rel='noreferrer noopener'>
              <div className="grid">
                <figure className="effect-lily">
                  <img src={cartonImg} alt="daniel-portfolio-item" />
                  <figcaption>
                    <div>
                      <h2 className='portfolio-text'>View Project</h2>
                      {/* <p>I build that App for a Cardboard <br />Plant</p> */}
                    </div>
                  </figcaption>
                </figure>
              </div>
            </a>
          </div>
          <div className="portfolio-grid">
            <a href='https://daniel-bevziuc.github.io/construction-part.github.io/' target='_blank' rel='noreferrer noopener'>
              <div className="grid">
                <figure className="effect-lily">
                  <img src={partImg} alt="daniel-portfolio-item" />
                  <figcaption>
                    <div>
                      <h2 className='portfolio-text'>View Project</h2>
                      {/* <p>I build that App for a Building Materials Company</p> */}
                    </div>
                  </figcaption>
                </figure>
              </div>
            </a>
            <a href='https://daniel-bevziuc.github.io/auto-agent-app/' target='_blank' rel='noreferrer noopener'>
              <div className="grid">
                <figure className="effect-lily">
                  <img src={teslaImg} alt="daniel-portfolio-item" />
                  <figcaption>
                    <div>
                      <h2 className='portfolio-text'>View Project</h2>
                      {/* <p>I build that App for Auto Agent</p> */}
                    </div>
                  </figcaption>
                </figure>
              </div>
            </a>
          </div>
        </div>
       <BottomTags  />
      </Fragment>
    );
  }
}

export default Portfolio;