import React, { Component } from 'react'
import moment from 'moment'
import * as classNames from 'classnames/bind'
import styles from './Illust.scss'

import piece1 from '../../assets/piece-1.png'
import piece2 from '../../assets/piece-2.png'
import piece3 from '../../assets/piece-3.png'
import LandingIllust1 from '../../assets/landing-illust-1.png'
import LandingIllust2 from '../../assets/landing-illust-2.png'
import LandingIllust3 from '../../assets/landing-illust-3.png'

const cx = classNames.bind(styles)

const date = moment().format('HH:mm');

export default class Illust extends Component {
  render () {
    return (
        <div className={cx('Illust')}>
            <img src={piece1} className="Piece_1" alt="Piece_1" />
            <img src={piece2} className="Piece_2" alt="Piece_2"/>
            <img src={piece3} className="Piece_3" alt="Piece_3"/>
            
            <img src={LandingIllust1} className="Landing_illust_1" alt="Landing_illust_1"/>
            <div src={LandingIllust2} className="Landing_illust_2" alt="Landing_illust_2">
            <span>{date}</span>
            </div>
            <img src={LandingIllust3} className="Landing_illust_3" alt="Landing_illust_3"/>
        </div>
    )
  }
}
