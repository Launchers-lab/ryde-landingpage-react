import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as classNames from 'classnames/bind'

import styles from './App.scss';
import Header from '../components/Header/Header'

import logo from '../assets/logo.png'
import piece1 from '../assets/piece-1.png'
import piece2 from '../assets/piece-2.png'
import piece3 from '../assets/piece-3.png'
import LandingIllust1 from '../assets/landing-illust-1.png'
import LandingIllust2 from '../assets/landing-illust-2.png'

import playstore from '../assets/playstore.png'
import appstore from '../assets/appstore.png'

const cx = classNames.bind(styles)

class App extends Component {
  render() {
    return (
      <div className={cx('App')}>
        <Header/>

        <div className="illust">
          <img src={piece1} className="Piece_1" alt="Piece_1" />
          <img src={piece2} className="Piece_2" alt="Piece_2"/>
          <img src={piece3} className="Piece_3" alt="Piece_3"/>
          
          <img src={LandingIllust1} className="Landing_illust_1" alt="Landing_illust_1"/>
          <div src={LandingIllust2} className="Landing_illust_2" alt="Landing_illust_2"/>
        </div>

        <div className={cx('content-1st')}>
            <span>
              애매한 거리, <br/>
              <img src={logo} alt=""/> 로 달리세요!
            </span>
          <p>
          걷기엔 멀고, 차타기엔 애매한 적 많죠? 이젠 RYDE로 달리세요!
          </p>
          <div className="AppStore">
            <Link to><img src={playstore} alt=""/></Link>
            <Link to><img src={appstore} alt=""/></Link>
          </div>
        </div>

        <div className={cx('content-2nd')}>
          <span>
            탄 만큼만 내세요!
          </span>
          <p>
            저렴하고 정직한가격으로, 다른 어떤 <br/>
            교통수단보다 빠르고 개인화 되어있습니다.
          </p>
        </div>

        <div className={cx('content-3rd')}>
          <span>
            이동의 문화를 만듭니다.
          </span>
          <p>
            RYDE와 함께할 새로운 팀원을 모집하고 있습니다.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
