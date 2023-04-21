import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Products } from '../../mock/products';
import Card from '../card';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation, Autoplay } from "swiper";
import arrowLeft from '../../assets/icons/arrows-main.svg'
import { Shadows } from '../../constants/shadow';
import { Colors } from '../../constants/colors';
import OpinionItem from '../opinion-item';

const Styled = styled.div`
  padding:50px 0;
  position:relative;
  @media screen and (max-width:1200px){
    .swiper-button-prev , .swiper-button-next{
      display:none;
      opacity:0;
      visibility:hidden;
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
  
  .mySwiper{
    .swiper-button-next , .swiper-button-prev{
      display:none;
      opacity:0;
      visibility:hidden;
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
    top:50%;
    transform:translateY(-50%);
    &::after{
        font-size:1px;
    }
  }
  .swiper-button-next.swiper-button-disabled, .swiper-button-prev.swiper-button-disabled{
    opacity:0;
  }
  .swiper-button-next{
    right:-25px;
  }
  .swiper-button-prev{
    left:-25px;
  }

  
`;

export default function Opinion({ ...rest }) {
    const [swiperRef, setSwiperRef] = useState(null);

    const prevHandler = useCallback(() => {
        swiperRef.slidePrev();
    })

    const nextHandler = useCallback(() => {
        swiperRef.slideNext();
    })


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
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                }}
                navigation={true}
                onSwiper={(swiper) => setSwiperRef(swiper)}
                modules={[Autoplay]}
                className="mySwiper">
                <SwiperSlide>
                    <OpinionItem />
                </SwiperSlide>
                <SwiperSlide>
                    <OpinionItem />
                </SwiperSlide>
                <SwiperSlide>
                    <OpinionItem />
                </SwiperSlide>
                <SwiperSlide>
                    <OpinionItem />
                </SwiperSlide>
            </Swiper>

            <div className="swiper-button-prev" onClick={prevHandler}></div>
            <div className="swiper-button-next" onClick={nextHandler}></div>
        </Styled>
    )
}
