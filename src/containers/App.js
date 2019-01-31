import React, { Component } from 'react';

import * as classNames from 'classnames/bind'
import styles from './App.scss';
import Header from '../components/Header/Header'
import logo from '../logo.png'

const cx = classNames.bind(styles)

class App extends Component {
  render() {
    return (
      <div className={cx('App')}>
        <Header/>
        <div className={cx('main')}>
          <span>
            애매한 거리, <br/>
            <img src={logo} alt=""/> 로 달리세요!
          </span>
          <p>
          걷기엔 멀고, 차타기엔 애매한 적 많죠? 이젠 RYDE로 달리세요!
          </p>
          <button>
            시작하기
          </button>
        </div>
      </div>
    );
  }
}

export default App;
