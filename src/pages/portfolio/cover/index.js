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
                      <h2 className='portfolio-text' >{props.btn}</h2>
                      {/* <p>This App I buil on Kodiri Boot Camp</p> */}
                    </div>
                  </figcaption>
                </figure>
              </div>
            </a>
      </Fragment>
    );
}
