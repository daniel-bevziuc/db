import React, { Component, Fragment } from 'react';
import './style.sass';
import TopTags from '../../components/topTags/index';
import BottomTags from '../../components/bottomTags/index';
import PortfolioCover from './cover/index';
import PortfolioData from '../../data/portfolioData';
import PagesContent from '../../components/pagesContent/index'




class Portfolio extends Component {
  render() {
    return (
      <Fragment>
       <TopTags />
        <div className="content">
          <div className="content-center content-without-padding">
            <PagesContent
              name='Portfolio'
              description='Producing high quality responsive web apps and exceptional UI and UX'
            />
          </div>
          <div className="portfolio-grid">
            {
              PortfolioData.map((project, index) => (
                <PortfolioCover
                  key={index}
                  name={project.name}
                  link={project.link}
                  img={project.img}
                  // description={project.description}
                />
              ))
            }
          </div>
        </div>
       <BottomTags  />
      </Fragment>
    );
  }
}

export default Portfolio;