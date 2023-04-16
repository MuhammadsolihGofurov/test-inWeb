import React from 'react';
import { Col, Row } from 'react-grid-system';
import styled from 'styled-components';
import img1 from '../../assets/images/category-1.png';
import img2 from '../../assets/images/category-2.png';
import img3 from '../../assets/images/category-3.png';
import img4 from '../../assets/images/category-4.png';
import Button from '../button';
import { Colors } from '../../constants/colors';
import { Link } from 'react-router-dom';

const Styled = styled.div`
    .category__item{
        border:1px solid ${Colors?.text_grey_6};
        position:relative;
        z-index:0;
        border-radius:8px;
        overflow:hidden;
        background-color:${Colors?.category_bg};
        background-repeat:no-repeat;
        background-position:right;
        
        @media screen and (max-width:992px){
            margin-bottom:20px;
        }

        
        a{
            width:auto !important;
        }
        
        &.big{
            min-height:460px;
            padding:30px;
            transition: all .5s;
            background-size:auto 460px;
            
            @media screen and (max-width:992px){
                min-height:320px;
                background-size:auto 320px;
            }
            
            @media screen and (max-width:480px){
                min-height:300px;
                background-size:auto 300px;
            }

            @media screen and (max-width:330px){
                min-height:250px;
                padding:10px;
                background-size:auto 250px;
            }

            &:hover{
                background-size:auto 560px;

                @media screen and (max-width:480px){
                    background-size:auto 400px;
                }
                
                &.orange{
                    background-color:rgb(255, 145, 65);
                }

                &.pink{
                    background-color:rgb(255, 121, 233);
                }
            }

            

        }

        .btn__dark{
            transition: all .5s;
            &:hover{
                border-color:${Colors?.white};
                color:${Colors?.white};
                background:transparent;
            }
        }
        
        &.small{
            min-height:220px;
            padding:20px;
            display:flex;
            flex-direction:column;
            justify-content:flex-end;
            background-size:auto 220px;
            transition: all .5s;
            &:hover{
                background-size:auto 250px;
                
                &.blue{
                    background-color:rgb(73, 200, 227);
                }
                &.green{
                    background-color:rgb(59, 156, 148);
                }
            }
            
            &:nth-child(1){
                margin-bottom:20px;
            }
            
            
            @media screen and (max-width:480px){
                min-height:180px;
                background-size:auto 180px;
            }
            @media screen and (max-width:330px){
                min-height:150px;
                padding:10px;
                background-size:auto 150px;
            }
            
        }
        
        // title
        &--title{
            font-size:22px;
            padding:0 0 30px 0;
        }

        // hover
        &:hover{
            .category__item{
                &--title{
                    color:${Colors?.white};
                }
            }
            .btn__dark{
                border-color:${Colors?.text_primary};
                color:${Colors?.white};
                background-color:${Colors?.text_primary};
            }
        }


    }
`

export default function Categories() {
    return (
        <Styled>
            <Row>
                <Col lg={4}>
                    <div className="category__item big orange" style={{ backgroundImage: `url(${img1})` }}>
                        <h3 className="category__item--title">
                            Популярные <br /> футболки
                        </h3>
                        <Link to='/category/1'>
                            <Button className='btn__dark'>Смотреть все</Button>
                        </Link>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="category__item small blue" style={{ backgroundImage: `url(${img2})` }}>
                        <h3 className="category__item--title">
                            Лучшие лонгсливы
                        </h3>
                        <Link to='/category/1'>
                            <Button className='btn__dark'>Смотреть все</Button>
                        </Link>
                    </div>
                    <div className="category__item small green" style={{ backgroundImage: `url(${img3})` }}>
                        <h3 className="category__item--title">
                            Кепки и <br /> бейсболки
                        </h3>
                        <Link to='/category/1'>
                            <Button className='btn__dark'>Смотреть все</Button>
                        </Link>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="category__item big pink" style={{ backgroundImage: `url(${img4})` }}>
                        <h3 className="category__item--title">
                            Теплые  <br />свитшоты
                        </h3>
                        <Link to='/category/1'>
                            <Button className='btn__dark'>Смотреть все</Button>
                        </Link>
                    </div>
                </Col>
            </Row>
        </Styled>
    )
}
