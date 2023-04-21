import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../constants/colors';
import { Col, Row } from 'react-grid-system';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo_footer.svg'
import { Flex, Socials } from '../';

const Styled = styled.footer`
    background-color:${Colors?.footer};
    padding:100px 0;
    @media screen and (max-width:768px){
        padding:50px 0;
    }

    .footer__top{
        gap:50px 0;
        p{
            padding:20px 0;
            font-size:14px;
            font-weight:600;
            color:${Colors?.text_grey_6};
        }
        h6{
            font-size:14px;
            font-weight:bold;
            color:${Colors?.text_secondary};
            padding-bottom:15px;
        }
        ul{
            li{
                padding-bottom:15px;
            }
            a{
                color:${Colors?.white};
                font-weight:600;
            }
        }
    }
    .footer__bottom{
        padding-top:100px;
        gap:10px 0;
        @media screen and (max-width:768px){
            padding-top:50px;
            gap:30px;
        }
        span{
            color:${Colors?.text_placeholder};
            padding-right:10px;
            @media screen and (max-width:768px){
                padding-right:20px;
            }
        }
        a.end{
            display:flex;
            align-items:center;
            @media screen and (max-width:768px){
                span{
                    padding-right:10px;
                }
            }
        }
        .flex{
            justify-content:flex-end;
            @media screen and (max-width:768px){
                justify-content:flex-start;
            }
        }
        .white{
            color:${Colors?.white};
        }
    }
`

export default function Footer({ ...rest }) {
    return (
        <Styled {...rest}>
            <div className="container">
                <Row className="footer__top" >
                    <Col lg={4}>
                        <Link to='/'>
                            <img src={logo} alt="logo" />
                        </Link>
                        <p>
                            ForYou - это печать максимально широкого спектра продукции — 24 часа, 7 дней в неделю, удобно, быстро, компетентно и качественно!
                        </p>
                        <Socials />
                    </Col>
                    <Col lg={2} xs={6} style={{ marginLeft: 'auto' }}>
                        <h6>Основные разделы</h6>
                        <ul>
                            <li>
                                <Link to='/'>
                                    Футболки
                                </Link>
                            </li>
                            <li>
                                <Link to='/'>
                                    Лонгсливы
                                </Link>
                            </li>
                            <li>
                                <Link to='/'>
                                    Свитшоты
                                </Link>
                            </li>
                            <li>
                                <Link to='/'>
                                    Худи
                                </Link>
                            </li>
                            <li>
                                <Link to='/'>
                                    Кепки
                                </Link>
                            </li>
                        </ul>
                    </Col>
                    <Col lg={2} xs={6}>
                        <h6>Помощь покупателю</h6>
                        <ul>
                            <li>
                                <Link to='/'>
                                    Как сделать заказ?
                                </Link>
                            </li>
                            <li>
                                <Link to='/'>
                                    Доставка
                                </Link>
                            </li>
                            <li>
                                <Link to='/'>
                                    О компании
                                </Link>
                            </li>
                            <li>
                                <Link to='/'>
                                    Отзывы
                                </Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row className='footer__bottom'>
                    <Col md={6}>
                        <span>2023 © foryou.uz</span>
                        <a href="map"><span>Карта сайта</span></a>
                    </Col>
                    <Col md={6}>
                        <Flex align='center'>
                            <a href="inweb" className='end'>
                                <span className='white'>Разработка -</span>
                                <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_0_1042)">
                                        <path d="M2.41591 0.427013C2.80241 0.381245 3.20334 0.464948 3.53719 0.663224C3.87942 0.863805 4.15008 1.18095 4.29169 1.54879C4.44216 1.93398 4.44883 2.37154 4.31095 2.76118C4.17399 3.15404 3.89091 3.49439 3.52818 3.70403C3.18424 3.90599 2.7698 3.98555 2.37414 3.92964C1.94992 3.87251 1.55085 3.6558 1.27228 3.3345C1.00784 3.03363 0.852406 2.64169 0.839673 2.24314C0.823213 1.82493 0.964362 1.40304 1.23036 1.07744C1.51902 0.718054 1.95458 0.477849 2.41591 0.427013Z" fill="#FF8A00" />
                                        <path d="M0.908203 4.70728C2.05215 4.70728 3.19594 4.70728 4.33988 4.70728C4.33895 4.84873 4.34407 4.99033 4.3315 5.13132C3.50354 5.49685 2.74143 6.01857 2.1287 6.68175C1.63305 7.21806 1.2405 7.85236 1.01364 8.54502C0.978545 8.54902 0.943296 8.55362 0.908203 8.55854C0.908203 7.27473 0.908203 5.99108 0.908203 4.70728Z" fill="#FF8A00" />
                                        <path d="M6.72663 4.86148C7.1066 4.81633 7.49045 4.79513 7.87275 4.82247C9.22368 4.90648 10.5563 5.37153 11.6356 6.18476C11.7164 6.24834 11.8024 6.30532 11.8835 6.36875C12.3558 6.73044 12.7605 7.18013 13.0608 7.69141C13.1457 7.84208 13.2409 7.98675 13.3217 8.13972C13.6741 8.78846 13.9088 9.50063 14.0046 10.2312C14.0293 10.4043 14.035 10.5791 14.0468 10.7534C14.1741 12.8971 14.0641 15.0442 14.0914 17.1898C13.0175 17.1898 11.9436 17.1898 10.8695 17.1898C10.8695 16.3182 10.8695 15.4468 10.8695 14.5752C10.8709 13.6488 10.8665 12.7219 10.872 11.7958C10.8569 11.0142 10.5987 10.2475 10.1839 9.58587C9.70349 8.83914 8.90334 8.28056 8.01048 8.15385C7.31514 8.06155 6.5729 8.15017 5.96529 8.51462C5.48672 8.77878 5.09138 9.1761 4.80194 9.63394C4.42415 10.2317 4.20893 10.9239 4.14651 11.6242C4.14511 13.4794 4.14635 15.3347 4.14588 17.1898C3.07182 17.1898 1.9979 17.1898 0.92399 17.1898C0.931288 16.7945 0.926319 16.3988 0.927717 16.0035C0.917158 14.7544 0.897593 13.505 0.913431 12.2559C0.923835 11.6961 0.940916 11.1361 0.975698 10.5771C1.04495 9.56129 1.3934 8.57145 1.94387 7.71353C2.29045 7.08583 2.82352 6.58054 3.40396 6.16387C3.74542 5.91783 4.10443 5.69421 4.48502 5.51191C5.18812 5.17218 5.95039 4.95547 6.72663 4.86148Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_0_1042">
                                            <rect width="15" height="18" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                        </Flex>
                    </Col>
                </Row>
            </div>
        </Styled>
    )
}
