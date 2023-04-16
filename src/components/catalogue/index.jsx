import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Catalogues } from '../../mock/catalogue';
import { get } from 'lodash';
import { Colors } from '../../constants/colors';
import Title from '../title';
import Input from '../input';
import { Col, Row } from 'react-grid-system';
import Range from '../range';
import Flex from '../flex';
import Checkbox from '../checkbox';

const Styled = styled.div`
    padding:40px 0;
        li{
            display:flex;
            align-items:center;
            gap:10px;
            padding-bottom:16px;
            cursor:pointer;
            transition:all .5s;
            .name{
                font-size:16px;
                color:${Colors?.text_grey_2};
                font-weight: 600;
                transition:all .5s;
                &:hover{
                    color:${Colors?.main};
                }
            }
            .count{
                font-size:12px;
                color:${Colors?.text_placeholder};
            }
            &.active{
                .name{
                    color:${Colors?.main};
                }
            }
        }
        ul.catalogue__ul--inside{
            padding-left:20px;
            li{
                position:relative;
                padding-left:15px;
                &::after{
                    content:'';
                    width:5px;
                    height:5px;
                    background-color:${Colors?.text_primary};
                    position:absolute;
                    top:25%;
                    left:0%;
                    transform:translateY(-50%);
                    border-radius:50%;
                }
            }
        }
        .filter__ul{
            h2{
                padding:30px 0 20px 0;
            }
        }
        .filter__tabs{
            .filter__tab{
                &--header{
                    display:flex;
                    justify-content:space-between;
                    padding:20px 0;
                    cursor:pointer;
                    .filter__tab{
                        &--shape{
                            transform:rotate(180deg);
                            transition:all .5s;
                        }
                    }
                    &.active{
                        .filter__tab{
                            &--shape{
                                transform:rotate(0deg);
                            }
                        }
                    }
                }
                &--body{
                    .range{
                        margin:0 0 20px 0;
                    }
                    .flex{
                        padding-bottom:20px;
                    }
                    .checkbox__content{
                        font-weight:500;
                    }
                }
            }
        }
`

export default function Catalogue({ isHome, ...rest }) {
    const [activeCatalogue, setActiveCatalogue] = useState(3);


    return (
        <Styled {...rest}>
            <ul className='catalogue__ul'>
                {
                    Catalogues?.map((cat, index) => {
                        return (
                            <>
                                <li
                                    key={index}
                                    className={`${activeCatalogue === get(cat, 'id') ? 'active' : ''}`}>
                                    <span className='name'>{get(cat, 'name')}</span>
                                    <span className='count'>{get(cat, 'count')}</span>

                                </li>
                                {
                                    isHome ?
                                        <>
                                        </>
                                        :
                                        <ul className='catalogue__ul--inside'>
                                            {
                                                get(cat, 'items')?.map((item, i) => {
                                                    return (
                                                        <li
                                                            key={get(item, 'count')}
                                                            className={`${activeCatalogue === get(item, 'id') ? 'active' : ''}`}
                                                        >
                                                            <span className='name'>{get(item, 'name')}</span>
                                                            <span className='count'>{get(item, 'count')}</span>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                }
                            </>
                        )
                    })
                }
            </ul>
            {
                isHome ?
                    <></>
                    :
                    <>
                        <div className="filter__ul">
                            <Title type='md'>
                                Фильтры
                            </Title>
                            <ul>
                                <li className='active'>
                                    <span className='name'>Футболки</span>
                                </li>
                                <li>
                                    <span className='name'>Лонгсливы</span>
                                </li>
                                <li>
                                    <span className='name'>Свитшоты</span>
                                </li>
                                <li>
                                    <span className='name'>Худи</span>
                                </li>
                                <li>
                                    <span className='name'>Кепки</span>
                                </li>
                            </ul>
                        </div>
                        <div className="filter__tabs">
                            <div className="filter__tab">
                                <div className="filter__tab--header active">
                                    <Title type='sm'>Цена</Title>
                                    <div className='filter__tab--shape'>
                                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M6.29289 0.292893C6.68342 -0.0976311 7.31658 -0.0976311 7.70711 0.292893L13.7071 6.29289C14.0976 6.68342 14.0976 7.31658 13.7071 7.70711C13.3166 8.09763 12.6834 8.09763 12.2929 7.70711L7 2.41421L1.70711 7.70711C1.31658 8.09763 0.683417 8.09763 0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289L6.29289 0.292893Z" fill="#828282" />
                                        </svg>
                                    </div>
                                </div>
                                <div className={`filter__tab--body active`}>
                                    <Range />
                                    <Row>
                                        <Col xs={6}>
                                            <Input label="От" type='text' />
                                        </Col>
                                        <Col xs={6}>
                                            <Input label="До" type='text' />
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                            <div className="filter__tab">
                                <div className="filter__tab--header active">
                                    <Title type='sm'>Размеры</Title>
                                    <div className='filter__tab--shape'>
                                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M6.29289 0.292893C6.68342 -0.0976311 7.31658 -0.0976311 7.70711 0.292893L13.7071 6.29289C14.0976 6.68342 14.0976 7.31658 13.7071 7.70711C13.3166 8.09763 12.6834 8.09763 12.2929 7.70711L7 2.41421L1.70711 7.70711C1.31658 8.09763 0.683417 8.09763 0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289L6.29289 0.292893Z" fill="#828282" />
                                        </svg>
                                    </div>
                                </div>
                                <div className={`filter__tab--body active`}>
                                    <Flex>
                                        <Checkbox text='Все размеры' isWhite />
                                    </Flex>
                                    <Flex>
                                        <Checkbox text='XS' isWhite />
                                    </Flex>
                                    <Flex>
                                        <Checkbox text='M' isWhite />
                                    </Flex>
                                    <Flex>
                                        <Checkbox text='L' isWhite />
                                    </Flex>
                                    <Flex>
                                        <Checkbox text='XL' isWhite />
                                    </Flex>
                                    <Flex>
                                        <Checkbox text='2XL' isWhite />
                                    </Flex>
                                </div>
                            </div>
                            <div className="filter__tab">
                                <div className="filter__tab--header active">
                                    <Title type='sm'>Цвет</Title>
                                    <div className='filter__tab--shape'>
                                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M6.29289 0.292893C6.68342 -0.0976311 7.31658 -0.0976311 7.70711 0.292893L13.7071 6.29289C14.0976 6.68342 14.0976 7.31658 13.7071 7.70711C13.3166 8.09763 12.6834 8.09763 12.2929 7.70711L7 2.41421L1.70711 7.70711C1.31658 8.09763 0.683417 8.09763 0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289L6.29289 0.292893Z" fill="#828282" />
                                        </svg>
                                    </div>
                                </div>
                                <div className={`filter__tab--body active`}>
                                    <Flex>
                                        <Checkbox text='Все размеры' isWhite />
                                    </Flex>
                                    <Flex>
                                        <Checkbox text='XS' isWhite />
                                    </Flex>
                                    <Flex>
                                        <Checkbox text='M' isWhite />
                                    </Flex>
                                    <Flex>
                                        <Checkbox text='L' isWhite />
                                    </Flex>
                                    <Flex>
                                        <Checkbox text='XL' isWhite />
                                    </Flex>
                                    <Flex>
                                        <Checkbox text='2XL' isWhite />
                                    </Flex>
                                </div>
                            </div>
                        </div>
                    </>
            }
        </Styled>
    )
}
