import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../constants/colors';
import { Shadows } from '../../constants/shadow';
import { Col, Row } from 'react-grid-system';
import { Link } from 'react-router-dom';

const Styled = styled.div`
    position:fixed;
    bottom:-1px;
    left:0;
    width:100%;
    background-color:${Colors?.white};
    box-shadow:${Shadows?.navbar};
    z-index:998;
    display:none;
    padding:0 10px;
    
    @media screen and (max-width:576px){
        display:block;
    }

    a{
        user-select:none;
        &:focus{
            outline:none;
        }
    }

    .navbar__fixed{
        height:100%;
        &--item{
            text-align:center;
            padding:20px 0;
            p{
                font-weight:500;
                font-size:12px;
                color:${Colors?.text_navbar};
            }
            svg{
                path{
                    fill:${Colors?.text_navbar};
                }
            }
            .navbar__fixed--icon{
                position:relative;
                z-index:0;
                margin-bottom:5px;
                width:80%;
                margin:0 auto;
                border-radius:500px;
                padding:2px;
                display:flex;
                align-items:center;
                justify-content:center;
                .navbar__fixed--shape{
                    position:absolute;
                    top:-7px;
                    right:5px;
                    background-color:${Colors?.main};
                    font-size:14px;
                    padding:2.3px 8px;
                    border-radius:50%;
                    color:${Colors?.white};
                    font-weight:bold;
                }
            }

            &.active{
                .navbar__fixed--icon{
                    background-color:${Colors?.bg_blue};
                }
                p{
                    color:${Colors?.text_primary};
                    font-weight:600;
                }
                svg{
                    path{
                        fill:${Colors?.main};
                    }
                }
            }
        }
    }
`

export default function NavbarFixed() {
    return (
        <Styled>
            <Row align='center' className="navbar__fixed">
                <Col xs={3}>
                    <Link to={'/'}>
                        <div className="navbar__fixed--item active">
                            <div className="navbar__fixed--icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M11.3861 1.21065C11.7472 0.929784 12.2528 0.929784 12.6139 1.21065L21.6139 8.21065C21.8575 8.4001 22 8.69141 22 9V20C22 20.7957 21.6839 21.5587 21.1213 22.1213C20.5587 22.6839 19.7957 23 19 23H5C4.20435 23 3.44129 22.6839 2.87868 22.1213C2.31607 21.5587 2 20.7957 2 20V9C2 8.69141 2.14247 8.4001 2.38606 8.21065L11.3861 1.21065ZM4 9.48908V20C4 20.2652 4.10536 20.5196 4.29289 20.7071C4.48043 20.8946 4.73478 21 5 21H19C19.2652 21 19.5196 20.8946 19.7071 20.7071C19.8946 20.5196 20 20.2652 20 20V9.48908L12 3.26686L4 9.48908Z" fill="#5900E6" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8 12C8 11.4477 8.44772 11 9 11H15C15.5523 11 16 11.4477 16 12V22C16 22.5523 15.5523 23 15 23C14.4477 23 14 22.5523 14 22V13H10V22C10 22.5523 9.55228 23 9 23C8.44772 23 8 22.5523 8 22V12Z" fill="#5900E6" />
                                </svg>
                            </div>
                            <p>Главная</p>
                        </div>
                    </Link>
                </Col>
                <Col xs={3}>
                    <div className="navbar__fixed--item">
                        <div className="navbar__fixed--icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4ZM2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 15.9706 15.9706 20 11 20C6.02944 20 2 15.9706 2 11Z" fill="#9499A5" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.9428 15.9428C16.3333 15.5523 16.9665 15.5523 17.357 15.9428L21.707 20.2928C22.0975 20.6833 22.0975 21.3165 21.707 21.707C21.3165 22.0975 20.6833 22.0975 20.2928 21.707L15.9428 17.357C15.5523 16.9665 15.5523 16.3333 15.9428 15.9428Z" fill="#9499A5" />
                            </svg>
                        </div>
                        <p>Поиск</p>
                    </div>
                </Col>
                <Col xs={3}>
                    <div className="navbar__fixed--item">
                        <div className="navbar__fixed--icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M14.462 2.49312C15.2508 2.16628 16.0963 1.99805 16.9501 1.99805C17.804 1.99805 18.6495 2.16628 19.4383 2.49312C20.2269 2.81991 20.9435 3.29885 21.5471 3.9026C22.1508 4.50615 22.6301 5.22306 22.9569 6.01173C23.2837 6.80054 23.4519 7.64602 23.4519 8.49987C23.4519 9.35372 23.2837 10.1992 22.9569 10.988C22.6301 11.7768 22.1511 12.4934 21.5472 13.097C21.5472 13.097 21.5473 13.0969 21.5472 13.097L12.7072 21.937C12.3167 22.3275 11.6835 22.3275 11.293 21.937L2.45301 13.097C1.23378 11.8778 0.548828 10.2241 0.548828 8.49987C0.548828 6.77562 1.23378 5.12199 2.45301 3.90277C3.67224 2.68354 5.32587 1.99858 7.05012 1.99858C8.77437 1.99858 10.428 2.68354 11.6472 3.90277L12.0001 4.25566L12.3528 3.90293C12.3528 3.90299 12.3529 3.90288 12.3528 3.90293C12.9564 3.29911 13.6732 2.81994 14.462 2.49312ZM16.9501 3.99805C16.359 3.99805 15.7737 4.11451 15.2276 4.34079C14.6815 4.56707 14.1853 4.89873 13.7674 5.31681L12.7072 6.37698C12.3167 6.7675 11.6835 6.7675 11.293 6.37698L10.233 5.31698C9.38886 4.47282 8.24394 3.99858 7.05012 3.99858C5.8563 3.99858 4.71138 4.47282 3.86723 5.31698C3.02307 6.16114 2.54883 7.30606 2.54883 8.49987C2.54883 9.69369 3.02307 10.8386 3.86723 11.6828L12.0001 19.8157L20.133 11.6828C20.5511 11.2649 20.8829 10.7685 21.1092 10.2224C21.3355 9.67633 21.4519 9.091 21.4519 8.49987C21.4519 7.90875 21.3355 7.32341 21.1092 6.77731C20.8829 6.23121 20.5513 5.73504 20.1332 5.31715C19.7153 4.89906 19.2188 4.56707 18.6727 4.34079C18.1266 4.11451 17.5412 3.99805 16.9501 3.99805Z" fill="#9499A5" />
                            </svg>
                        </div>
                        <p>Избранное</p>
                    </div>
                </Col>
                <Col xs={3}>
                    <div className="navbar__fixed--item">
                        <div className="navbar__fixed--icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_150_3776)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M7 21C7 19.8954 7.89543 19 9 19C10.1046 19 11 19.8954 11 21C11 22.1046 10.1046 23 9 23C7.89543 23 7 22.1046 7 21Z" fill="#9499A5" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M18 21C18 19.8954 18.8954 19 20 19C21.1046 19 22 19.8954 22 21C22 22.1046 21.1046 23 20 23C18.8954 23 18 22.1046 18 21Z" fill="#9499A5" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 1C0 0.447715 0.447715 0 1 0H5C5.47663 0 5.88701 0.336385 5.98055 0.803743L6.82043 5H23C23.298 5 23.5805 5.13293 23.7705 5.36256C23.9605 5.59218 24.0381 5.89458 23.9823 6.18733L22.3809 14.5848C22.2437 15.2754 21.868 15.8958 21.3195 16.3373C20.7738 16.7766 20.0916 17.011 19.3914 17H9.68864C8.98837 17.011 8.3062 16.7766 7.76048 16.3373C7.21225 15.8959 6.83664 15.2759 6.69933 14.5857C6.69927 14.5854 6.69939 14.5859 6.69933 14.5857L5.02879 6.2392C5.02201 6.21159 5.01638 6.18353 5.01195 6.15508L4.18032 2H1C0.447715 2 0 1.55228 0 1ZM7.22073 7L8.66084 14.1952C8.70656 14.4254 8.83179 14.6322 9.01461 14.7793C9.19743 14.9265 9.42619 15.0047 9.66084 15.0002L9.68 15H19.4L19.4192 15.0002C19.6538 15.0047 19.8826 14.9265 20.0654 14.7793C20.2474 14.6328 20.3723 14.4273 20.4185 14.1984L21.7913 7H7.22073Z" fill="#9499A5" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_150_3776">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <div className="navbar__fixed--shape">
                                1
                            </div>
                        </div>
                        <p>Корзина</p>
                    </div>
                </Col>
            </Row>
        </Styled>
    )
}
