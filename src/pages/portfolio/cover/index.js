import React, { Fragment } from 'react';


export default function PortfolioCover(props) {
    return (
      <Fragment>
        <a href={props.link} target="_blank"  rel='noreferrer noopener'>
              <div className="grid">
                <figure className="effect-lily">
                  <img src={props.img} alt="daniel-portfolio-item" />
                  <figcaption>
                    <div>
                      <h2 className='portfolio-text' >View Project</h2>
                      <p>{props.description}</p>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </a>
      </Fragment>
    );
}
