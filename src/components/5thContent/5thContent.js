import React, { Component } from 'react'

import * as classNames from 'classnames/bind'
import styles from './5thContent.scss'

import logo from '../../assets/ic-logo-big.svg'
import playstore from '../../assets/playstore.svg'
import appstore from '../../assets/appstore.svg'

const cx = classNames.bind(styles)

export default class Content5th extends Component {
  render () {
    return (
        <div className={cx('content-5th')}>
          <p>
            새로운 이동 라이프스타일을 <br/>
            <img src={logo} alt="RYDE"/>와 함께 경험하세요!
          </p>
          <div className="AppStore">
            <a href='https://play.google.com/apps'><img src={playstore} alt=""/></a>
            <a href='https://www.apple.com/kr/ios/app-store/'><img src={appstore} alt=""/></a>
          </div>
        </div>
    )
  }
}

