import React, { Component, Fragment } from 'react';
import './style.sass';





class About extends Component {
  render() {
    return (
      <Fragment>
        <div className="btn btn-primary nav-mobile-btn">
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
          <div className="content-center content-without-padding">
            <h1 className="title-top">
              <span className="tag-content tag-content-item">&#60;h1&#62;</span>
              <span className="description-center">About Me & Contacts</span>
              <span className="tag-content tag-content-item">&#60;/h1&#62;</span>
            </h1>
            <p className="description-text-top">
              <span className="tag-content tag-content-item">&#60;p&#62;</span>
              <span>
              My primary goal is to apply my technical expertise all throughout the full frontend life cycle to ensure production and delivery of products and services that meet client specifications.<br /> Along with a competent frontend developing team, and with strong personal knowledge, skills, and experience in frontend,<br /> I am positive that this goal can be achieved. My experience as junior frontend developer enhanced my abilities in designing, implementing, testing, and upgrading frontend.<br /> One of my objectives is to keep updated with the latest IT trends and technologies. <br />I am confident that if given the opportunity.</span>
              <span className="tag-content tag-content-item">&#60;p&#62;</span>
            </p>
            <div className="contacts-bottom-block">
              <div className="contact-form">
                <input className="contact-input-item" placeholder="User Name" type="text" />
                <input className="contact-input-item" placeholder="Your email" type="email" />
                <textarea className="contact-textarea-item" placeholder="Write your message here.." name="user-message"
                  id="user-message" cols="30" rows="3"></textarea>
                <button type="button" className="btn btn-primary orange-button-bottom button-link" data-toggle="button" aria-pressed="false"
                  autoComplete="off">
                  Send</button>
              </div>
              <div className="contact-list-block">
                <ul className="contact-list">
                  <li className="contact-list-item">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone"
                      className="svg-inline--fa fa-phone fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512">
                      <path fill="currentColor"
                        d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path>
                    </svg>
                    <p className="contact-text-left">(+44) 7500 4544 80</p>
                  </li>
                  <li className="contact-list-item">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope"
                      className="svg-inline--fa fa-envelope fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512">
                      <path fill="currentColor"
                        d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                    </svg>
                    <p className="contact-text-left">bevziuc.daniel@mail.com</p>
                  </li>
                  <li className="contact-list-item">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt"
                      className="svg-inline--fa fa-map-marker-alt fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512">
                      <path fill="currentColor"
                        d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                    </svg>
                    <p className="contact-text-left">UK, London</p>
                  </li>
                </ul>
              </div>
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

export default About;