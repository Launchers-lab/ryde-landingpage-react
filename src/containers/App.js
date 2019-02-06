import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { Switch, Route } from 'react-router-dom'

import * as classNames from 'classnames/bind'

import Main from './Main/Main'
import NotFound from './NotFound/NotFound'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

import styles from './App.scss';
const cx = classNames.bind(styles)

class App extends Component {
  render() {
    return (
      <div className={cx('App')}>
        <Header/>
        <Switch>
          <Route path="/" exact component={Main}/>
          <Route component={NotFound} />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default hot(module)(App)
