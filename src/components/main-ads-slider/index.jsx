import React from 'react';
import styled from 'styled-components';
import img1 from './../../assets/images/ads-1.png';
import img2 from './../../assets/images/ads-2.png';
import img3 from './../../assets/images/ads-3.png';
import img4 from './../../assets/images/ads-4.png';
import img5 from './../../assets/images/ads-5.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper";
import arrowLeft from '../../assets/icons/arrows-main.svg'
import { Shadows } from '../../constants/shadow';
import { Colors } from '../../constants/colors';

const Styled = styled.div`
  .mySwiper{
    padding:2rem 1rem 2rem 0;

    @media screen and (max-width:1200px){
      padding:8px 0 30px 0;
      .swiper-button-prev , .swiper-button-next{
        display:none;
        opacity:0;
        visibility:hidden;
      }
    }
    @media screen and (max-width:1200px){
      padding:0 0 10px 0;
    }

    .swiper-slide{
      .mySwiper__item{
        overflow:hidden;
        border-radius:10px;
        height:100px;
        width:80%;
        display:flex;
        align-items:center;

        @media screen and (max-width:1200px){
          width:75%;
        }

      }
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
  }
`;

export default function MainAdsSlider() {
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
            spaceBetween: -20,
          },
          360: {
            slidesPerView: 2,
            spaceBetween: -45,
          },
          576: {
            slidesPerView: 3,
            spaceBetween: -40,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: -40,
          },
          992: {
            slidesPerView: 5,
            spaceBetween: -50,
          },
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper">
        <SwiperSlide>
          <div className='mySwiper__item'>
            <LazyLoadImage
              src={img1}
              effect='blur'
              alt='1'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mySwiper__item">
            <LazyLoadImage
              src={img2}
              effect='blur'
              alt='1'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mySwiper__item">
            <LazyLoadImage
              src={img3}
              effect='blur'
              alt='1'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mySwiper__item">
            <LazyLoadImage
              src={img4}
              effect='blur'
              alt='1'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mySwiper__item">
            <LazyLoadImage
              src={img5}
              effect='blur'
              alt='1'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mySwiper__item">
            <LazyLoadImage
              src={img1}
              effect='blur'
              alt='1'
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </Styled>
  )
}
