import React, { Fragment, Component } from 'react';
import './style.sass';


class BottomTags extends Component {
  render() {
    return (
      <Fragment>
         <div className="tag-text-bottom">
          <span className="tag-content tag-content-with-spacing">&#60;/body&#62;</span>
          <span className="tag-content">&#60;/html&#62;</span>
        </div>
      </Fragment>
    );
  }
}

export default BottomTags;