import React from 'react';
import { Col, Row } from 'react-grid-system';
import styled from 'styled-components';
import logo from './../../assets/images/logo.png'
import { Flex, Lang, Menu, Search } from '../';
import { Colors } from '../../constants/colors';
import { Shadows } from '../../constants/shadow';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleBarsMenu } from '../../redux/slices/settings';

const Styled = styled.header`
    padding:32px 0;
    position:fixed;
    z-index:1000;
    top:0;
    left:0;
    width:100%;
    background-color:${Colors?.white};


    .header__telegram{
        color:${Colors?.header_grey};
        border-bottom: 2px dashed ${Colors?.header_grey};
        transition:all .5s;
        &:hover{
            border-bottom-style: solid;
        }
    }

    .header__main{
        &--bars{
            display:none;
            position:relative;
            z-index:0;
            &::after{
                content:'';
                position:absolute;
                top:-12px;
                left:2px;
                width:50px;
                height:50px;
                border-radius:50%;
                background-color:${Colors?.main};
                transition:all.5s;
                z-index:-1;
                transform:scale(0);
                transition:all .5s;
                opacity:.2;
            }
            &:hover{
                &::after{
                    transform:scale(1);
                }
            }
        }
    }

    @media screen and (max-width:1200px){
        box-shadow:${Shadows?.header};
        .header__main{
            &--menu{
                display: none;
            }
        }
    }

    @media screen and (max-width:768px){
        .header__main{
            &--link{
                display: none;
            }
            &--bars{
                display:block;
            }
        }
    }

    @media screen and (max-width:576px){
        .header__main{
            &--icons{
                .header{
                    &__search , &__like , &__basket{
                        display: none;
                    }
                }
            }
            &--lang{
                display:none;
            }
        }
    }

`

export default function Header({ ...rest }) {
    const dispatch = useDispatch();

    const changeBars = () => {
        dispatch(toggleBarsMenu());
    }

    return (
        <Styled {...rest}>
            <section className='container'>
                <Row align='center' justify='between'>
                    <Col sm={1} xs={2} className='header__main--bars' onClick={changeBars}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12Z" fill="#5900E6" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z" fill="#5900E6" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M2 18C2 17.4477 2.44772 17 3 17H21C21.5523 17 22 17.4477 22 18C22 18.5523 21.5523 19 21 19H3C2.44772 19 2 18.5523 2 18Z" fill="#5900E6" />
                        </svg>
                    </Col>
                    <Col md={2} sm={3} xs={8} style={{ textAlign: 'center' }} className='header__main--logo'>
                        <Link to={'/'}>
                            <img src={logo} alt="logo" loading='lazy' />
                        </Link>
                    </Col>
                    <Col xl={5} className='header__main--menu'>
                        <Menu />
                    </Col>
                    <Col xl={2} md={4} className='header__main--link'>
                        <a href="#">
                            <Flex gap='8px' justify='center'>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.9963 1.19858C13.8025 3.658 12.9626 9.63533 12.5362 12.3905C12.3553 13.5579 11.9935 13.9471 11.6576 13.9938C10.9082 14.0716 10.3397 13.4023 9.61609 12.8263C8.47905 11.9235 7.83301 11.3631 6.73473 10.4915C5.45557 9.47967 6.2825 8.91929 7.01899 8.01647C7.21281 7.78298 10.5206 4.15611 10.5852 3.82923C10.5941 3.77972 10.5929 3.72831 10.5817 3.67949C10.5704 3.63066 10.5494 3.58588 10.5206 3.54904C10.443 3.47121 10.3397 3.50234 10.2492 3.51791C10.1329 3.54904 8.324 4.99667 4.7966 7.86081C4.27977 8.28109 3.81461 8.49901 3.40114 8.48345C2.93599 8.46788 2.05737 8.17213 1.39841 7.90751C0.584393 7.59619 -0.0487304 7.42496 0.00295314 6.88015C0.0287949 6.59997 0.351817 6.31978 0.959099 6.02402C4.732 4.04715 7.23865 2.73961 8.49197 2.11697C12.084 0.31132 12.8205 0 13.3115 0C13.4148 0 13.6603 0.0311317 13.8154 0.186791C13.9446 0.311319 13.9833 0.482545 13.9963 0.607073C13.9833 0.700469 14.0092 0.980656 13.9963 1.19858Z" fill="#828282" />
                                </svg>
                                <span className='header__telegram'>Написать в телеграм</span>
                            </Flex>
                        </a>
                    </Col>
                    <Col xl={2} md={4} sm={4} xs={2} className='header__main--icons'>
                        <Search />
                    </Col>
                    <Col xl={1} sm={2} className='header__main--lang'>
                        <Lang />
                    </Col>
                </Row>
            </section>
        </Styled>
    )
}
