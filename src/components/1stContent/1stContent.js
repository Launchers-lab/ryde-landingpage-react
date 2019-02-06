import React, { Component } from 'react'

import * as classNames from 'classnames/bind'
import styles from './1stContent.scss'

import logo from '../../assets/ic-logo-big.svg'
import playstore from '../../assets/playstore.svg'
import appstore from '../../assets/appstore.svg'

const cx = classNames.bind(styles)

export default class Content1st extends Component {
  render () {
    return (
        <div className={cx('content-1st')}>
          <span>
            애매한 거리, <br/>
            <img src={logo} alt="RYDE"/> 로 달리세요!
          </span>
          <p>
          걷기엔 멀고, 차타기엔 애매한 적 많죠? 이젠 RYDE로 달리세요!
          </p>
          <div className="AppStore">
            <a href='https://play.google.com/apps'><img src={playstore} alt=""/></a>
            <a href='https://www.apple.com/kr/ios/app-store/'><img src={appstore} alt=""/></a>
          </div>
        </div>
    )
  }
}
