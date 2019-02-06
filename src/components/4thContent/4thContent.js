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
            <p>새로운 새미 모빌리티의 시작, 라이드가 주도합니다.</p>
            <ul>
              <li>
                <div>Lorem Ipsum dolor sit amet</div>
                <MaterialIcon icon='check' color='#ff4077' size='18' />
              </li>
              <li>
                <div>Lorem Ipsum dolor sit amet</div>
                <MaterialIcon icon='check' color='#ff4077' size='18' />
              </li>
              <li>
                <div>Lorem Ipsum dolor sit amet</div>
                <MaterialIcon icon='check' color='#ff4077' size='18' />
              </li>
              <li>
                <div>Lorem Ipsum dolor sit amet</div>
                <MaterialIcon icon='check' color='#ff4077' size='18' />
              </li>
            </ul>
          </div>
        </div>
    )
  }
}

