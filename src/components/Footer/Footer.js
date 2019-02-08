import React, { Component } from 'react';

import * as classNames from 'classnames/bind'
import styles from './Footer.scss';
import MaterialIcon from 'material-icons-react';

import logofooter from '../../assets/ic-footer-ryde.svg'
import luanchersheader from '../../assets/logo-header-launchers.svg';
import luanchers from '../../assets/ic-launchers.svg'
import luancherslogo from '../../assets/logo-launchers.svg';
import IconCollabo from '../../assets/ic-collabo.svg';

import IconYoutube from '../../assets/ic-footer-youtube.svg';
import IconFacebook from '../../assets/ic-footer-facebook.svg';
import IconGithub from '../../assets/ic-footer-github.svg';
import IconInstagram from '../../assets/ic-footer-instagram.svg';
import IconMedium from '../../assets/ic-footer-medium.svg';

const cx = classNames.bind(styles)

export default class Footer extends Component {
  render () {
    return (
        <div className={cx('Footer')}>
          <div className='icons'>
            <img src={luanchersheader} alt="launchers" className='logo-header-launchers'/>
            <img src={luanchers} alt="launchers" className='ic_launchers'/> <br/>
            <div>
              <MaterialIcon icon='close' size='18' color='#5a5e69'/>
              <img src={logofooter} alt="RYDE" className='ic-footer-ryde'/>
            </div>
            <p>© 2019 Launchers X RYDE</p>
          </div>
          <div className="company">
            <span>
            주식회사 런처스 (Launchers)
            <p>대표 이사 : 정우주</p>
            <p>사업자등록번호 : 557-81-01226</p>
            <p>서울특별시 강남구 테헤란로 501, 345호 (삼성동 브이플렉스)</p>
            </span>
          </div>

          <div className="policy">
            <span>
              Terms of Service & Privacy Policy
              <a href='https://www.naver.com'>서비스 이용 약관</a>
              <a href='https://www.naver.com'>개인정보 처리 방침</a>
              <a href='https://www.naver.com'>판매 금지 항목</a>
              <a href='https://www.naver.com'>배송 및 환불 안내</a>
            </span>
          </div>

          <div className="contact">
            <span>
              Contact us
              <a href="mailto:woojoo@softmarshmallow.com">woojoo@softmarshmallow.com</a>
              <a href="tel:02-837-7753">02-837-7753</a>
            </span>
            <span>
              <a href="mailto:woojoo@softmarshmallow.com">woojoo@softmarshmallow.com</a>
              <a href="tel:02-837-7753">02-837-7753</a>
            </span>

            <div className='Footer-menu-item'>
              <a href='https://www.youtube.com/' className='Footer-menu-icon'><img src={IconYoutube} className='Footer-menu-icon' alt='go to launchers youtube' /></a>
              <a href='https://www.facebook.com/rydeapp.io/' className='Footer-menu-icon'><img src={IconFacebook} alt='go to launchers facebook' /></a>
              <a href='https://github.com/orgs/Launchers-lab/teams' className='Footer-menu-icon'><img src={IconGithub} className='Footer-menu-icon' alt='go to launchers github' /></a>
              <a href='https://www.instagram.com/' className='Footer-menu-icon'><img src={IconInstagram} className='Footer-menu-icon' alt='go to launchers instagram' /></a>
              <a href='https://www.medium.com/' className='Footer-menu-icon'><img src={IconMedium} className='Footer-menu-icon' alt='go to launchers medium' /></a>
            </div>
          </div>

          <div className="mobilelogo">
            <div>
              <img src={luancherslogo} alt="launchers" className='logo-launchers'/>
              <img src={IconCollabo} alt="collabo" className='ic-collabo'/>
              <img src={logofooter} alt="RYDE" className='ic-footer-ryde'/>
            </div>
            <p>© 2019 Launchers X RYDE</p>
          </div>
        </div>
    )
  }
}

