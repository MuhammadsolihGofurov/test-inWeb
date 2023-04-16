import React from 'react';
import styled from 'styled-components';
import { Products } from '../../mock/products';
import Card from '../card';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation, Autoplay } from "swiper";
import arrowLeft from '../../assets/icons/arrows-main.svg'
import { Shadows } from '../../constants/shadow';
import { Colors } from '../../constants/colors';
import { Link } from 'react-router-dom';
import { get } from 'lodash';

const Styled = styled.div`
  padding:50px 0;

  
  @media screen and (max-width:1200px){
    .swiper-button-prev , .swiper-button-next{
      display:none;
      opacity:0;
      visibility:hidden;
    }
  }
  @media screen and (max-width:576px){
    padding:20px 0;
  }
  .swiper-button-next{
    right:0;
    &::after{
        content:url(${arrowLeft});
    }

  }
  .swiper-button-prev{
    left:0;
    &::after{
        content:url(${arrowLeft});
        transform:rotate(180deg);
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
  .swiper-button-next.swiper-button-disabled, .swiper-button-prev.swiper-button-disabled{
    opacity:0;
  }
  .big__action{
    &--card{
      @media screen and (max-width:576px){
        width:80%;
      }
      @media screen and (max-width:350px){
        width:100%;
      }
    }
  }
`;

export default function BigActions({ ...rest }) {
  return (
    <Styled>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          350: {
            slidesPerView: 2,
            spaceBetween: -25,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper">
        {
          Products?.map((product, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="big__action--card">
                  <Link to={`/product/${get(product , 'id')}`}>
                    <Card item={product} isGrid />
                  </Link>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </Styled>
  )
}
