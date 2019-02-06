import React, { Component } from 'react'

import * as classNames from 'classnames/bind'
import styles from './3rdContent.scss'

import logo from '../../assets/ic-logo-big.svg'

const cx = classNames.bind(styles)

export default class Content3rd extends Component {
  render () {
    return (
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
    )
  }
}

