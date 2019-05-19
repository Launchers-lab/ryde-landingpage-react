import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { isMobile, isBrowser } from 'react-device-detect';

import * as classNames from 'classnames/bind'
import styles from './Header.scss'

import logo from '../../assets/ic-logo-big.svg'
import logowhite from '../../assets/ic-logo-white.svg'

const cx = classNames.bind(styles)

function myFunction() {
  if (isMobile && document.documentElement.scrollTop < 660) {
    document.getElementById("Header").className = cx('Header false');
    document.getElementById("logo").src = logo
  } else if (!isMobile && document.documentElement.scrollTop < 900) { 
    document.getElementById("Header").className = cx('Header false');
    document.getElementById("logo").src = logowhite
  } else {
    document.getElementById("Header").className = cx('Header noncolored true');
    document.getElementById("logo").src = logo
  }
}
export default class Header extends Component {
  constructor(props) {
    super(props);
    window.onscroll = function () {
      myFunction()
      console.log(document.documentElement.scrollTop)
    };
    
  }

  render () {
    return (
      <nav id='Header'>
        <ul>
          <li>
            <a href='/'>
              <img src={logowhite} className='logo' id='logo' alt='RYDE' />
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
