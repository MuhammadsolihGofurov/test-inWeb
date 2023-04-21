import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../constants/colors';
import { Card, Title } from '../';
import { Products } from '../../mock/products';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation } from "swiper";
import arrowRight from '../../assets/icons/arrows.svg'
import arrowLeft from '../../assets/icons/arrows-left.svg'
import { Shadows } from '../../constants/shadow';
import { Visible } from 'react-grid-system';
import { Link } from 'react-router-dom';
import { get } from 'lodash';

const Styled = styled.div`
    h2{
        text-align: center;
    }
    .main__card__slider{
        border:2px solid ${Colors?.text_grey_6};
        border-radius:12px;
        overflow:hidden;
        display:flex;
        align-items:center;
        justify-content:center;
        padding:20px;

        @media screen and (max-width:1200px){
            border:none;
        }
        @media screen and (max-width:480px){
            padding:10px 0 50px 0;
        }

        .swiper{
            width:90%;
            padding:0 35px;

            @media screen and (max-width:1200px){
                width:50%;
            }
            @media screen and (max-width:992px){
                width:60%;
            }
            @media screen and (max-width:768px){
                width:70%;
            }
            @media screen and (max-width:576px){
                width:90%;
            }
            @media screen and (max-width:480px){
                width: 100%;
                padding:0 25px;
                .card__image{
                    height:240px;
                }
            }
        }

    }

    .mySwiper{
        .swiper-button-next{
            right:0;
            &::after{
                content:url(${arrowRight});
            }
        }
        .swiper-button-prev{
            left:0;
            &::after{
                content:url(${arrowLeft});
            }
        }
        .swiper-button-next , .swiper-button-prev{
            width:48px;
            height:48px;
            border-radius:50%;
            box-shadow:${Shadows?.button};
            display:flex;
            justify-content:center;
            align-items:center;
            background-color:${Colors?.white};
            &::after{
                font-size:1px;
            }
        }
        .swiper-button-prev{
            left:5px;
        }
        .swiper-button-next{
            right:5px;
        }
    }

    
`

export default function MainCardSlider({ ...rest }) {
    return (
        <Styled {...rest}>
            <Visible lg sm md xs><Title type='md'>Хиты продаж</Title></Visible>
            <div className="main__card__slider">

                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    modules={[Navigation]}
                    navigation={true}
                    className='mySwiper'
                >
                    {
                        Products?.map((item, index) => {
                            return (
                                <SwiperSlide key={index} >
                                    <Link to={`/product/${get(item, 'id')}`}>
                                        <Card isMain item={item} />
                                    </Link>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </Styled>
    )
}
