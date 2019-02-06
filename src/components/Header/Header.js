import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

import * as classNames from 'classnames/bind'
import styles from './Header.scss'
import logo from '../../assets/ic-logo-big.svg'

const cx = classNames.bind(styles)
export default class Header extends Component {
  
  state = {
    scroll: false
  }

  componentDidMount() {
    window.addEventListener('scroll', () => this.setState({scroll: true}));
}

componentWillUnmount() {
    window.removeEventListener('scroll', () => this.setState({scroll: false}));
    console.log(this.state.scroll)
}

  render () {
    return (
      <nav className={
        this.state.scroll === true
          ? (cx('Header true'))
          : (cx('Header false'))
      }>
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
