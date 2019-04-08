import React, { Component } from "react";

import * as classNames from "classnames/bind";
import styles from "./5thContent.scss";

import logo from "../../assets/ic-logo-big.svg";
import playstore from "../../assets/playstore.svg";
import appstore from "../../assets/appstore.svg";
import { CheckOs } from "../../utils";

const cx = classNames.bind(styles);

export default class Content5th extends Component {
  render() {
    return (
      <div className={cx("content-5th")}>
        <p>
          새로운 이동 라이프스타일을 <br />
          <img src={logo} alt="RYDE" />와 함께 경험하세요!
        </p>
        <div className="AppStore">
          <a href="https://play.google.com/store/apps/details?id=io.rydeapp.ryde">
            <img src={playstore} alt="" />
          </a>
          <a href="https://itunes.apple.com/kr/app/ryde/id1453366845?mt=8&app=itunes&ign-mpt=uo%3D4">
            <img src={appstore} alt="" />
          </a>
        </div>
        <button
          onClick={() => {
            window.location.href =
              CheckOs() === "Android"
                ? "https://play.google.com/store/apps/details?id=io.rydeapp.ryde"
                : "https://itunes.apple.com/kr/app/ryde/id1453366845?mt=8&app=itunes&ign-mpt=uo%3D4";
          }}
        >
          시작하기
        </button>
      </div>
    );
  }
}
