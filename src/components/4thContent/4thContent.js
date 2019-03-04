import React, { Component } from 'react'

import MaterialIcon from 'material-icons-react'
import * as classNames from 'classnames/bind'
import styles from './4thContent.scss'

const cx = classNames.bind(styles)

export default class Content4th extends Component {
  render () {
    return (
        <div className={cx('content-4th')}>
          <div>
            <span>RYDE, 좀 더 알아볼까요?</span>
            <p>새로운 새미 모빌리티의 시작,<br/> 라이드가 주도합니다.</p>
            <ul>
              <li>
                <div>내 주변의 RYDE를 찾아 스캔하세요.</div>
                <MaterialIcon icon='check' color='#ff4077' size='18' />
              </li>
              <li>
                <div>1000원으로 잠금해제 하세요.</div>
                <MaterialIcon icon='check' color='#ff4077' size='18' />
              </li>
              <li>
                <div>분당 100원으로 즐기세요.</div>
                <MaterialIcon icon='check' color='#ff4077' size='18' />
              </li>
              <li>
                <div>이쁘게 주차하고 후기를 남기세요!</div>
                <MaterialIcon icon='check' color='#ff4077' size='18' />
              </li>
            </ul>
          </div>
        </div>
    )
  }
}

