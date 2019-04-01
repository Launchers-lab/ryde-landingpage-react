import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      milliSecond: 0,
      second: 0
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(prev =>
        prev.milliSecond === 99
          ? { milliSecond: 0, second: prev.second === 99 ? 0 : prev.second + 1 }
          : { milliSecond: prev.milliSecond + 1 }
      );
    }, 10);
  }

  render() {
    const { second, milliSecond } = this.state;
    return (
      <>
        {`${second.toString().length === 1 ? "0" : ""}${second}:${
          milliSecond.toString().length === 1 ? "0" : ""
        }${milliSecond}`}
      </>
    );
  }
}

export default Timer;
