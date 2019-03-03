import React, { Component } from 'react'

import MaterialIcon from 'material-icons-react'
import * as classNames from 'classnames/bind'
import styles from './2ndContent.scss'


const cx = classNames.bind(styles)

export default class Content2nd extends Component {
  render () {
    return (
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
                <div className="content 3rdcont">어디서든 시작하고 원하는 곳에서 종료</div>
              </div>
            </div>
          </div>

          <ul>
            <li>
              <div className="check">
                <MaterialIcon icon='check' color='#2070ee' size='18' />
              </div>
              <div className="content">스쿠터 사용</div>
            </li>
            <li>
              <div className="check">
                <MaterialIcon icon='check' color='#2070ee' size='18' />
              </div>
              <div className="content">처음 1,000원으로 잠금 해제</div>
            </li>
            <li>
              <div className="check">
                <MaterialIcon icon='check' color='#2070ee' size='18' />
              </div>
              <div className="content">어디서든 시작하고 원하는 곳에서 종료</div>
            </li>
          </ul>

          <div className="letters-wrap">
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

        </div>
    )
  }
}
