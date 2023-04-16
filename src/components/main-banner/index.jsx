import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../constants/colors';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Col, Row } from 'react-grid-system';
import { Button } from '../';
import image from '../../assets/images/main.png'

const Styled = styled.div`
    width: 100%;
    // min-height: 450px;
    background:${Colors?.bg_linear};
    border-radius:12px;
    overflow:hidden;
    .main__banner{
        padding:80px;
        color:${Colors?.white};

        @media screen and (max-width: 768px) {
            padding:40px;
        }
        @media screen and (max-width: 480px) {
            padding:30px;
        }
        @media screen and (max-width: 375px) {
            padding:20px;
        }

        &--link{
            color:${Colors?.white};
            font-size:20px;
            font-weight:bold;
            @media screen and (max-width: 576px) {
                font-size: 16px;
            }
            @media screen and (max-width: 480px) {
                font-size: 14px;
            }
            @media screen and (max-width: 375px) {
                font-size:12px;
            }
        }
        &--title{
            font-size:40px;
            font-weight:bold;
            padding:30px 0;
            @media screen and (max-width: 768px) {
                font-size:30px;
            }
            @media screen and (max-width: 576px) {
                font-size:20px;
            }
            @media screen and (max-width: 480px) {
                font-size:16px;
                padding:15px 0;
            }
            @media screen and (max-width: 375px) {
                font-size:14px;
                padding:10px 0;
            }
        }
        &--image{
            position:absolute;
            width:50%;
            height:100%;
            top:0;
            right:0;
            z-index:-1;
            img{
                width:100%;
                height:100%;
                object-fit:cover;
            }
        }
    }

    .swiper{
        width: 100%;
        &-slide{
            min-height: 450px;
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            @media screen and (max-width: 768px) {
                min-height: 300px;
            }
            @media screen and (max-width: 480px) {
                min-height: 200px;
            }
        }
    }
`;

export default function MainBanner({ ...rest }) {
    return (
        <Styled {...rest}>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
            >
                <SwiperSlide className='main__banner'>
                    <Row align='center'>
                        <Col xs={7}>
                            <a href="@printy_na_futbolki" className='main__banner--link'>
                                @printy_na_futbolki
                            </a>
                            <h1 className='main__banner--title'>
                                Подпишитесь на телеграм канал нашего магазина!
                            </h1>
                            <Button className="btn__white">Подписаться</Button>
                        </Col>
                        <div className="main__banner--image">
                            <img src={image} alt="main" loading='lazy' />
                        </div>
                    </Row>
                </SwiperSlide>
            </Swiper>
        </Styled>
    )
}
