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
      </div>
    );
  }
}

export default App;
