import React, { Component } from "react";
import * as classNames from "classnames/bind";

import styles from "./Survey.scss";

const cx = classNames.bind(styles);

export default class Main extends Component {
  render() {
    return (
      <div className={cx("Survey")}>
        <h1>Hi</h1>
      </div>
    );
  }
}
