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
                <div>집에서 역까지 걸어가기 힘들다고요?</div>
                <MaterialIcon icon='check' color='#ff4077' size='18' />
              </li>
              <li>
                <div>스쿠터를 대여하자니 반납해야되서 귀찮다고요?</div>
                <MaterialIcon icon='check' color='#ff4077' size='18' />
              </li>
              <li>
                <div>택시도 애매하고 걷기도 애매하다고요?</div>
                <MaterialIcon icon='check' color='#ff4077' size='18' />
              </li>
              <li>
                <div>걷기엔 늦을거같은데 뛰어가긴 싫다고요?</div>
                <MaterialIcon icon='check' color='#ff4077' size='18' />
              </li>
            </ul>
          </div>
        </div>
    )
  }
}

