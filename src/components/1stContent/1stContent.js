import React, { Component } from "react";

import * as classNames from "classnames/bind";
import { withRouter } from "react-router-dom";
// import { CheckOs } from "../../utils";
import styles from "./1stContent.scss";

import logo from "../../assets/ic-logo-big.svg";
import playstore from "../../assets/playstore.svg";
import appstore from "../../assets/appstore.svg";

const cx = classNames.bind(styles);

class Content1st extends Component {
  render() {
    return (
      <div className={cx("content-1st")}>
        <div className="MobileAppStore">
          <a href="https://play.google.com/store/apps/details?id=io.rydeapp.ryde">
            <img src={playstore} alt="" />
          </a>
          <a href="https://itunes.apple.com/kr/app/ryde/id1453366845?mt=8&app=itunes&ign-mpt=uo%3D4">
            <img src={appstore} alt="" />
          </a>
        </div>
        <span>
          애매한 거리, <br />
          <img src={logo} alt="RYDE" /> 로 달리세요!
        </span>
        <p>
          걷기엔 멀고, 차타기엔 애매한 적 많죠? <br />
          이젠 RYDE로 달리세요!
        </p>
        <div className="AppStore">
          <a href="https://play.google.com/store/apps/details?id=io.rydeapp.ryde">
            <img src={playstore} alt="" />
          </a>
          <a href="https://itunes.apple.com/kr/app/ryde/id1453366845?mt=8&app=itunes&ign-mpt=uo%3D4">
            <img src={appstore} alt="" />
          </a>
        </div>
      </div>
    );
  }
}

export default withRouter(Content1st);
