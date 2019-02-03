import React from 'react';
import './Footer.scss';
import Logo from '../../assets/logo-launchers.png';
import IconYoutube from '../../assets/ic-footer-youtube.svg';
import IconFacebook from '../../assets/ic-footer-facebook.svg';
import IconGithub from '../../assets/ic-footer-github.svg';
import IconInstagram from '../../assets/ic-footer-instagram.svg';
import IconMedium from '../../assets/ic-footer-medium.svg';

const Footer = () => (
  <div className='Footer'>
    <div className='Footer-logo'>
      <img className='Footer-logo-img' src={Logo} alt='launchers logo' />
      <p className='Footer-copy'>
        © 2018 Launchers Co
      </p>
    </div>
    <div className='Footer-menu'>
      <div className='Footer-menu-title Footer-menu-title-important'>
        주식회사 런처스 (Launchers)
      </div>
      <div className='Footer-menu-item'>
      대표 이사 : 박준성
      </div>
      <div className='Footer-menu-item'>
        사업자 등록 번호 : 110111-6810489
      </div>
      <div className='Footer-menu-item'>
        서울특별시 강남구 테헤란로 501, 345호 (삼성동 브이플렉스)
      </div>
    </div>
    <div className='Footer-menu'>
      <a href='https://www.naver.com'>
        <div className='Footer-menu-title'>
        Terms of Service & Privacy Policy
        </div>
      </a>
      <a href='https://www.naver.com'>
        <div className='Footer-menu-item Footer-menu-inline'>
          서비스 이용 약관
        </div>
      </a>
      <a href='https://www.naver.com'>
        <div className='Footer-menu-item Footer-menu-inline'>
          개인정보 처리 방침
        </div>
      </a>
      <a href='https://www.naver.com'>
        <div className='Footer-menu-item Footer-menu-inline'>
          판매 금지 항목
        </div>
      </a>
      <a href='https://www.naver.com'>
        <div className='Footer-menu-item Footer-menu-inline'>
          배송 및 환불 안내
        </div>
      </a>
    </div>
    <div className='Footer-menu'>
      <div className='Footer-menu-title'>
        Contact us
      </div>
      <div className='Footer-menu-item Footer-menu-inline'>
        woojoo@softmarshmallow.com
      </div>
      <div className='Footer-menu-item Footer-menu-inline'>
        02-837-7753
      </div>
      <div className='Footer-menu-item'>
        <a href='https://www.youtube.com/' className='Footer-menu-icon'><img src={IconYoutube} className='Footer-menu-icon' alt='go to launchers youtube' /></a>
        <a href='https://www.facebook.com/launchers.shop/' className='Footer-menu-icon'><img src={IconFacebook} alt='go to launchers facebook' /></a>
        <a href='https://github.com/orgs/Launchers-lab/teams' className='Footer-menu-icon'><img src={IconGithub} className='Footer-menu-icon' alt='go to launchers github' /></a>
        <a href='https://www.instagram.com/' className='Footer-menu-icon'><img src={IconInstagram} className='Footer-menu-icon' alt='go to launchers instagram' /></a>
        <a href='https://www.medium.com/' className='Footer-menu-icon'><img src={IconMedium} className='Footer-menu-icon' alt='go to launchers medium' /></a>
      </div>
    </div>
  </div>
);

export default Footer;
