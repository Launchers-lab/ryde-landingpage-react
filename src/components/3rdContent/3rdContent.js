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
                <button><a href="https://www.rocketpunch.com/companies/launchers/">지원하기</a></button>
              </span>
              

            </div>
            <div className="cards">
              <span>WooJoo Jung</span>
              <div>CEO</div>
              <p>
                한국 모빌리티 시장에 도전장을 내미는 대표 정우주 입니다.
              </p>
            </div>
            <div className="cards">
              <span>JinWon Kim</span>
              <div>Product Designer</div>
              <p>
                RYDE의 제품 설계를 맡고있는 김진원입니다.
              </p>
            </div>
            <div className="cards">
              <span>YoungHa Kim</span>
              <div>Back-End Developer</div>
              <p>
                "백엔드 개발자 김영하입니다"
              </p>
            </div>
            <div className="cards">
              <span>MinHyuk Lee</span>
              <div>Illustrator</div>
              <p>
                RYDE 일러스트 디자이너 이민혁입니다{'><'} 일하는거 좋아해요
              </p>
            </div>
            <div className="cards">
              <span>SeungJoon Park</span>
              <div>Hardware Developer</div>
              <p>
                He comes from the non-acting branch of the Coppola family: his father August (brother of Francis)
              </p>
            </div>
            <div className="cards">
              <span>TaeGeon Go</span>
              <div>Web Developer</div>
              <p>
              RYDE의 막내 웹개발자 입니당{'><'} 반항기라 굴려도 잘 안구릅니당
              </p>
            </div>
            <div></div>
          </div>


          <span>
            이동의 문화를 만듭니다.
          </span>
          <p>
            RYDE와 함께할 새로운 팀원을 <br/> 모집하고 있습니다.
          </p>
        </div>
    )
  }
}

