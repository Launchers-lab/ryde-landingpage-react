import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as classNames from 'classnames/bind'

import img from '../../assets/404.svg'
import styles from './NotFound.scss';
const cx = classNames.bind(styles)
export default class NotFound extends Component {
  render() {
    return (
      <div className={cx('NotFound')}>
        <img src={img} alt="404-NOTFOUND"/>
        <h1>404 - Page not found</h1>
        <p>
        죄송합니다. 찾으시는 페이지가 존재하지 않습니다. <br/>
        URL이 정확한지 다시 한 번 확인해주세요.
        </p>
        <Link to='/'>
          <button>메인화면으로 이동</button>
        </Link>
      </div>
    );
  }
}
