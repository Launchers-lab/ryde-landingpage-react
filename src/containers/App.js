import React, { Component } from 'react'
import * as classNames from 'classnames/bind'
import moment from 'moment'
import MaterialIcon from 'material-icons-react'

import styles from './App.scss';
import Header from '../components/Header/Header'

import logo from '../assets/logo.png'
import piece1 from '../assets/piece-1.png'
import piece2 from '../assets/piece-2.png'
import piece3 from '../assets/piece-3.png'
import LandingIllust1 from '../assets/landing-illust-1.png'
import LandingIllust2 from '../assets/landing-illust-2.png'
import LandingIllust3 from '../assets/landing-illust-3.png'

import playstore from '../assets/playstore.png'
import appstore from '../assets/appstore.png'

const cx = classNames.bind(styles)

const date = moment().format('LT');


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
          <div src={LandingIllust2} className="Landing_illust_2" alt="Landing_illust_2">
            <span>{date}</span>
          </div>
          <img src={LandingIllust3} className="Landing_illust_3" alt="Landing_illust_3"/>
        </div>

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

        <div className={cx('content-2nd')}>
          <div className="checks">
            <div>
              <div>
                <div className="check">
                  <MaterialIcon icon='check' color='#2070ee' size='36' />
                </div>
                <div className="content">스쿠터 사용</div>
              </div>
            </div> <br/>
            <div>
              <div>
                <div className="check">
                  <MaterialIcon icon='check' color='#2070ee' size='36' />
                </div>
                <div className="content">처음 1,000원으로 잠금 해제</div>
              </div>
            </div> <br/>
            <div>
              <div>
                <div className="check">
                  <MaterialIcon icon='check' color='#2070ee' size='36' />
                </div>
                <div className="content">어디서든 시작하고 원하는 곳에서 종료</div>
              </div>
            </div>
          </div>

          <div className="letters">
            <span>
              탄 만큼만 내세요!
            </span>
            <p>
              저렴하고 정직한가격으로, 다른 어떤 <br/>
              교통수단보다 빠르고 개인화 되어있습니다.
            </p>
          </div>
        </div>

        <div className={cx('content-3rd')}>
          <span>
            이동의 문화를 만듭니다.
          </span>
          <p>
            RYDE와 함께할 새로운 팀원을 모집하고 있습니다.
          </p>
          
          <div className="cards-parent">
            <div className="cards">
              <span className='apply'>
                <img src={logo} className="logo" alt="RYDE"/>
                지원하기
                <p>
                우리는 언제나 당신을 맞을 <br/>
                준비가 되어있습니다.
                </p>
                <button>지원하기</button>
              </span>
              

            </div>
            <div className="cards">
              <span>First name</span>
              <span>CEO</span>
              <p>
                He comes from the non-acting branch of the Coppola family: his father August (brother of Francis)
              </p>
            </div>
            <div className="cards">
              <span>First name</span>
              <span>CEO</span>
              <p>
                He comes from the non-acting branch of the Coppola family: his father August (brother of Francis)
              </p>
            </div>
            <div className="cards">
              <span>First name</span>
              <span>CEO</span>
              <p>
                He comes from the non-acting branch of the Coppola family: his father August (brother of Francis)
              </p>
            </div>
          </div>
        </div>

        <div className="content-4th">
          <span>RYDE, 좀 더 알아볼까요?</span>
          <p>새로운 새미 모빌리티의 시작, 라이드가 주도합니다.</p>
          <ul>
            <li>
              <div>Lorem Ipsum dolor sit amet</div>
              <MaterialIcon icon='check' color='#ff4077' size='18' />
            </li>
            <li>
              <div>Lorem Ipsum dolor sit amet</div>
              <MaterialIcon icon='check' color='#ff4077' size='18' />
            </li>
            <li>
              <div>Lorem Ipsum dolor sit amet</div>
              <MaterialIcon icon='check' color='#ff4077' size='18' />
            </li>
            <li>
              <div>Lorem Ipsum dolor sit amet</div>
              <MaterialIcon icon='check' color='#ff4077' size='18' />
            </li>
          </ul>
        </div>

        <div className="content-5th">
          <p>
            새로운 이동 라이프스타일을 <br/>
            <img src={logo} alt="RYDE"/>와 함께 경험하세요!
          </p>
          <div className="AppStore">
            <a href='https://play.google.com/apps'><img src={playstore} alt=""/></a>
            <a href='https://www.apple.com/kr/ios/app-store/'><img src={appstore} alt=""/></a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
