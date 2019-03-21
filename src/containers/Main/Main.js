import React, { Component } from "react";
import * as classNames from "classnames/bind";
import Helmet from "react-helmet";

import styles from "./Main.scss";

import Illust from "../../components/Illust/Illust";
import Content1st from "../../components/1stContent/1stContent";
import Content2nd from "../../components/2ndContent/2ndContent";
import Content3rd from "../../components/3rdContent/3rdContent";
import Content4th from "../../components/4thContent/4thContent";
import Content5th from "../../components/5thContent/5thContent";
const cx = classNames.bind(styles);

export default class Main extends Component {
  render() {
    return (
      <div className={cx("Main")}>
        <Helmet>
          <title>RYDE</title>
        </Helmet>
        <Illust />

        <Content1st />
        <Content2nd />
        <Content3rd />
        <Content4th />
        <Content5th />
      </div>
    );
  }
}
