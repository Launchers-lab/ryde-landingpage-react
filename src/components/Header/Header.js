import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import * as classNames from 'classnames/bind'
import styles from './Header.scss'
import logo from '../../logo.png'

const cx = classNames.bind(styles)

export default class Header extends Component {
  render () {
    return (
      <nav className={cx('Header')}>
        <ul>
          <li>
            <a href='/'>
              <img src={logo} alt='' />
            </a>
            <div />
          </li>
          <li>
            <div>
                <div>
                    <Link to="#">Start</Link>
                </div>
                <div>
                    <Link to="#">About</Link>
                </div>
                <div>
                    <Link to="#">Contact</Link>
                </div>
            </div>
          </li>
        </ul>
      </nav>
    )
  }
}
