import React, { Component } from "react";
import moment from "moment";
import * as classNames from "classnames/bind";
import styles from "./Illust.scss";

import piece2 from "../../assets/piece-2.svg";
import piece3 from "../../assets/piece-3.svg";
import LandingIllust1 from "../../assets/landing-illust-1.svg";
import LandingIllust2 from "../../assets/landing-illust-2.svg";
import LandingIllust3 from "../../assets/landing-illust-3.svg";
import Timer from "../Timer/Timer";

const cx = classNames.bind(styles);

export default class Illust extends Component {
  state = {
    date: moment().format("HH:mm")
  };

  componentDidMount() {
    setInterval(() => this.setState({ date: moment().format("HH:mm") }), 1000);
  }
  render() {
    return (
      <div className={cx("Illust")}>
        <img src={piece2} className="Piece_2" alt="Piece_2" />
        <img src={piece3} className="Piece_3" alt="Piece_3" />

        <img
          src={LandingIllust1}
          className="Landing_illust_1"
          alt="Landing_illust_1"
        />
        <div
          src={LandingIllust2}
          className="Landing_illust_2"
          alt="Landing_illust_2"
        >
          <span>
            <Timer />
          </span>
        </div>
        <img
          src={LandingIllust3}
          className="Landing_illust_3"
          alt="Landing_illust_3"
        />
      </div>
    );
  }
}
