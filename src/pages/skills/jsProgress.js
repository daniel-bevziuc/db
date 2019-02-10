import React, { Component, Fragment } from 'react';
import './style.sass';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";



class JsProgress extends Component {
  constructor() {
    super();
    this.state = {
      percent: 0,
    };
    this.increase = this.increase.bind(this);
  }

  componentDidMount() {
    this.increase();
  }

  increase() {
    const percent = this.state.percent + 1;
    if (percent >= 66) {
      clearTimeout(this.tm);
      return;
    }
    this.setState({ percent });
    this.tm = setTimeout(this.increase, 15);
  }


  render() {
    return (
      <Fragment>
        <Progress percent={66} status="active"

          theme={
            {
              active: {
                symbol: this.state.percent + '%',
                // trailColor: 'yellow',
                color: '#F9BB3B'
              },
            }
          }


        />
      </Fragment>
    );
  }
}

export default JsProgress;