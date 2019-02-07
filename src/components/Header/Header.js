import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

import * as classNames from 'classnames/bind'
import styles from './Header.scss'
import logo from '../../assets/ic-logo-big.svg'

const cx = classNames.bind(styles)

function myFunction(){
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("Header").className = cx('Header true');
  } else {
    document.getElementById("Header").className = cx('Header false');
  }
}
export default class Header extends Component {
  constructor(props) {
    super(props);
    window.onscroll = function() {myFunction()};
  }

  render () {
    return (
      <nav id='Header'>
        <ul>
          <li>
            <a href='/'>
              <img src={logo} alt='' />
            </a>
            <div />
          </li>
          <li>
           {/* <div>
              <div>
                  <Link to="#">Start</Link>
              </div>
              <div>
                  <Link to="#">About</Link>
              </div>
              <div>
                  <Link to="#">Contact</Link>
              </div>
            </div>  */}
          </li>
        </ul>
      </nav>
    )
  }
}
