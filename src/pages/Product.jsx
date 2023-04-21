import React, { useState } from 'react';
import styled from 'styled-components';
import { BigActions, Breadcrums, Button, Flex, Opinion, OpinionItem, Title } from '../components';
import { useParams } from 'react-router-dom';
import { Row, Col, Visible } from 'react-grid-system';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/thumbs";
import "swiper/css/pagination";
import { FreeMode, Pagination, Thumbs } from "swiper";
import { Products } from '../mock/products';
import { Colors } from '../constants/colors';

const Styled = styled.div`
  .single__product{
    padding:10px 0 50px 0;
    gap:20px 0;

    @media screen and (max-width: 576px){
      gap:10px 0;
    }
    
    &--thumb{
      width:100%;
      height:100px;
      border-radius:8px;
      overflow:hidden;
      background-color:${Colors?.text_grey_5};
    }
    
    img{
      width:100%;
      height:100%;
      object-fit:cover;
    }
    
    &--main{
      width:100%;
      height:100%;
      border-radius:8px;
      overflow:hidden;
      background-color:${Colors?.text_grey_5};
    }

    .swiper{
      width:100%;
      height:100%;
      position:relative;
      max-height:560px;

      // &.vertical{
      //   width:100%;
      //   height:100%;
      //   overflow:hidden;
      // }
      
      &.horizontal{
        &-slide{
          height:580px;
        }

      }

      .swiper-button-prev , .swiper-button-next{
        display:none;
      }

      .single__product{
        &--like{
          position:absolute;
          top:20px;
          right:20px;
          z-index:99;
        }
      }

      .swiper-pagination{
        opacity:0;
      }

      @media screen and (max-width:768px){
        padding-bottom:25px;

        .swiper-pagination{
          opacity:1;
        }
        .swiper-pagination-bullet{
          background-color:${Colors?.text_grey_6};
          opacity:1;
          &-active{
            opacity:1;
            background-color:${Colors?.text_placeholder};
          }
        }

        .swiper-horizontal>.swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal, .swiper-pagination-custom, .swiper-pagination-fraction{
          bottom: 0px;
        }
      }
      
      @media screen and (max-width:576px){
        &.horizontal{
          &-slide{
            height:400px;
          }
        }
        
      }
      @media screen and (max-width:480px){
        &.horizontal{
          &-slide{
            height:300px;
          }
        }
      }
    }

    &--list{
      padding:10px 0 20px 0;
      p{
        font-size:16px;
        color:${Colors?.text_secondary};
      }
    }

    &--price{
      .price__current{
        font-size:28px;
        color:${Colors?.main};
        padding-bottom:5px;
      }
      .price__old{
        font-size:20px;
        color:${Colors?.text_secondary};
        text-decoration:line-through;
      }
    }

    &--sizes{
      padding:20px 0;
      p{
        color:${Colors?.text_secondary};
      }
      .size__items{
        gap:10px 0;
        padding-top:20px;
      }
      .flex{
        justify-content:space-between;
      }
      .size__item{
        padding:10px;
        border:1px solid ${Colors?.text_grey_5};
        border-radius:5px;
        font-weight:600;
        font-size:14px;
        text-align:center;
      }
    }

    &--colors{
      .flex{
        padding:10px 0 0 0;
      }
      .color__item{
        width:80px;
        height:80px;
        border-radius:5px;
        overflow:hidden;
        cursor:pointer;
        &.active{
          border:2px solid ${Colors?.main};
        }
      }
    }

    &--type{
      padding:20px 0;
      h6{
        font-size:14px;
      }
    }

    &--btns{
      padding-top:20px;
      button{
        width:100%;
      }
    }

    .underline{
      text-decoration:underline;
      cursor:pointer;
    }

    .linethrough{
      text-decoration:line-through;
    }

    .title{
      color:${Colors?.text_secondary};
      font-weight:600;
    }


    // about
    &__about{
      &--body{
        padding:20px 0 30px 0;
        font-weight:400;
      }
      &--list{
        li{
          // list-style:disc;
          padding-bottom:15px;
          position:relative;
          padding-left:20px ;
          &::before{
            content: "";
            position:absolute;
            top:5px;
            left:5px;
            width:4px;
            height:4px;
            border-radius:50%;
            background-color:${Colors?.text_primary};
          }
        }
      }
    }

    // opinion
    &__opinion{
      padding:50px 0;
      &--mobile{
        gap:20px 0;
        padding:50px 0;
        @media screen and (max-width:576px){
          padding:20px 0;
        }
      }
      button{
        width:100%;
      }
      &--btns{
        gap:20px 0;
        text-align:center;
      }
      &--more{
        color:${Colors?.main};
        cursor:pointer;
        font-weight:600;
      }
    }

  }
`

export default function Product({ ...rest }) {
  const { id } = useParams();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Styled>
      <section className="container">
        <Breadcrums old="Главная" current="product name" currentLink={`/product/${id}`} />

        <Row className="single__product">
          <Col xl={7} md={6}>
            <Row>
              <Col xl={2}>
                <Visible xxl xl>
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={5}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Thumbs]}
                    className="vertical"
                    direction="vertical"
                  >
                    {
                      Products[2]?.images?.map((item, index) => {
                        return (
                          <SwiperSlide key={index}>
                            <div className="single__product--thumb">
                              <img src={item} alt='img' />
                            </div>
                          </SwiperSlide>
                        )
                      })
                    }
                  </Swiper>
                </Visible>
              </Col>
              <Col xl={10} style={{ paddingLeft: '10px' }}>
                <Visible xxl xl>
                  <Swiper
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                    modules={[FreeMode, Thumbs]}
                    className="horizontal"
                  >
                    {
                      Products[2]?.images?.map((item, index) => {
                        return (
                          <SwiperSlide key={index}>
                            <div className="single__product--main">
                              <img src={item} alt='img' />
                            </div>
                          </SwiperSlide>
                        )
                      })
                    }
                  </Swiper>
                </Visible>
                <Visible lg md sm xs>
                  <Swiper
                    spaceBetween={10}
                    navigation={true}
                    modules={[Pagination]}
                    className="isMobile"
                    pagination={true}
                  >
                    {
                      Products[2]?.images?.map((item, index) => {
                        return (
                          <SwiperSlide key={index}>
                            <div className="single__product--main">
                              <img src={item} alt='img' />
                            </div>
                          </SwiperSlide>
                        )
                      })
                    }
                    <div className="single__product--like">
                      <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M19.2824 1.32441C20.3342 0.888611 21.4615 0.664307 22.6 0.664307C23.7384 0.664307 24.8657 0.888611 25.9175 1.32441C26.969 1.76012 27.9245 2.39871 28.7292 3.20371C29.5342 4.00845 30.1732 4.96432 30.609 6.01588C31.0447 7.06763 31.2691 8.19494 31.2691 9.33341C31.2691 10.4719 31.0447 11.5992 30.609 12.6509C30.1732 13.7026 29.5345 14.6581 28.7294 15.4629C28.7294 15.463 28.7295 15.4628 28.7294 15.4629L16.9428 27.2496C16.4221 27.7702 15.5778 27.7702 15.0571 27.2496L3.27048 15.4629C1.64484 13.8372 0.731567 11.6324 0.731567 9.33341C0.731567 7.03441 1.64484 4.82957 3.27048 3.20393C4.89612 1.57829 7.10096 0.66502 9.39995 0.66502C11.699 0.66502 13.9038 1.57829 15.5294 3.20393L16 3.67446L16.4703 3.20415C16.4703 3.20408 16.4702 3.20423 16.4703 3.20415C17.275 2.39905 18.2308 1.76016 19.2824 1.32441ZM22.6 3.33097C21.8118 3.33097 21.0313 3.48626 20.3032 3.78797C19.5751 4.08967 18.9135 4.53188 18.3563 5.08933L16.9428 6.50288C16.4221 7.02358 15.5778 7.02358 15.0571 6.50288L13.6438 5.08955C12.5183 3.96401 10.9917 3.33169 9.39995 3.33169C7.8082 3.33169 6.28164 3.96401 5.1561 5.08955C4.03056 6.21509 3.39823 7.74165 3.39823 9.33341C3.39823 10.9252 4.03056 12.4517 5.1561 13.5773L16 24.4211L26.8438 13.5773C27.4013 13.0201 27.8437 12.3583 28.1454 11.6302C28.4471 10.902 28.6024 10.1216 28.6024 9.33341C28.6024 8.54524 28.4471 7.76479 28.1454 7.03666C27.8437 6.30852 27.4015 5.64696 26.844 5.08977C26.2868 4.53232 25.6248 4.08967 24.8967 3.78797C24.1686 3.48626 23.3881 3.33097 22.6 3.33097Z" fill="#5900E6" />
                      </svg>
                    </div>
                  </Swiper>
                </Visible>
              </Col>
            </Row>
          </Col>
          <Col xl={5} md={6}>
            <Title type='md'>
              Cyberpunk Samurai
            </Title>
            <div className='single__product--list'>
              <Flex wrap='wrap' gap='20px'>
                <p>Артикул: <span>Cyber 03</span></p>
                <p className='underline'>Отзывов: <span>512</span></p>
              </Flex>
            </div>
            <div className="single__product--price">
              <h2 className='price__current'>79,000 сум</h2>
              <p className='price__old'>119,000 сум</p>
            </div>
            <div className="single__product--sizes">
              <Flex>
                <p className='title'>Размер:</p>
                <p className='underline'>Как узнать размер?</p>
              </Flex>
              <Row className='size__items'>
                <Col sm={3} xs={4} style={{ paddingRight: '0' }}>
                  <div className="size__item">
                    <p>XS (44-46)</p>
                  </div>
                </Col>
                <Col sm={3} xs={4} style={{ paddingRight: '0' }}>
                  <div className="size__item">
                    <p>XS (44-46)</p>
                  </div>
                </Col>
                <Col sm={3} xs={4} style={{ paddingRight: '0' }}>
                  <div className="size__item">
                    <p>XS (44-46)</p>
                  </div>
                </Col>
                <Col sm={3} xs={4} style={{ paddingRight: '0' }}>
                  <div className="size__item">
                    <p>XS (44-46)</p>
                  </div>
                </Col>
                <Col sm={3} xs={4} style={{ paddingRight: '0' }}>
                  <div className="size__item">
                    <p>XS (44-46)</p>
                  </div>
                </Col>
                <Col sm={3} xs={4} style={{ paddingRight: '0' }}>
                  <div className="size__item">
                    <p>XS (44-46)</p>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="single__product--colors">
              <p className='title'>Цвет:</p>
              <Flex gap='10px' wrap='wrap'>
                {
                  Products[2]?.images?.map((item, index) => {
                    return (
                      <div className={`color__item ${index === 0 ? 'active' : ''}`} key={index}>
                        <img src={item} alt="i" />
                      </div>
                    )
                  })
                }
              </Flex>
            </div>
            <div className="single__product--type">
              <Flex gap='5px' wrap='wrap'>
                <p className='title'>Состав:</p>
                <h6>92% хлопок , </h6>
                <h6>8% эластан</h6>
              </Flex>
            </div>
            <Row align='center' className='single__product--btns' wrap='wrap'>
              <Col lg={11} md={10}>
                <Button className='btn__send'>Добавить в корзину</Button>
              </Col>
              <Col lg={1} md={2}>
                <Visible xxl xl md >
                  <div className='like'>
                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M19.2824 1.32441C20.3342 0.888611 21.4615 0.664307 22.6 0.664307C23.7384 0.664307 24.8657 0.888611 25.9175 1.32441C26.969 1.76012 27.9245 2.39871 28.7292 3.20371C29.5342 4.00845 30.1732 4.96432 30.609 6.01588C31.0447 7.06763 31.2691 8.19494 31.2691 9.33341C31.2691 10.4719 31.0447 11.5992 30.609 12.6509C30.1732 13.7026 29.5345 14.6581 28.7294 15.4629C28.7294 15.463 28.7295 15.4628 28.7294 15.4629L16.9428 27.2496C16.4221 27.7702 15.5778 27.7702 15.0571 27.2496L3.27048 15.4629C1.64484 13.8372 0.731567 11.6324 0.731567 9.33341C0.731567 7.03441 1.64484 4.82957 3.27048 3.20393C4.89612 1.57829 7.10096 0.66502 9.39995 0.66502C11.699 0.66502 13.9038 1.57829 15.5294 3.20393L16 3.67446L16.4703 3.20415C16.4703 3.20408 16.4702 3.20423 16.4703 3.20415C17.275 2.39905 18.2308 1.76016 19.2824 1.32441ZM22.6 3.33097C21.8118 3.33097 21.0313 3.48626 20.3032 3.78797C19.5751 4.08967 18.9135 4.53188 18.3563 5.08933L16.9428 6.50288C16.4221 7.02358 15.5778 7.02358 15.0571 6.50288L13.6438 5.08955C12.5183 3.96401 10.9917 3.33169 9.39995 3.33169C7.8082 3.33169 6.28164 3.96401 5.1561 5.08955C4.03056 6.21509 3.39823 7.74165 3.39823 9.33341C3.39823 10.9252 4.03056 12.4517 5.1561 13.5773L16 24.4211L26.8438 13.5773C27.4013 13.0201 27.8437 12.3583 28.1454 11.6302C28.4471 10.902 28.6024 10.1216 28.6024 9.33341C28.6024 8.54524 28.4471 7.76479 28.1454 7.03666C27.8437 6.30852 27.4015 5.64696 26.844 5.08977C26.2868 4.53232 25.6248 4.08967 24.8967 3.78797C24.1686 3.48626 23.3881 3.33097 22.6 3.33097Z" fill="#5900E6" />
                    </svg>
                  </div>
                </Visible>
              </Col>
            </Row>

          </Col>
        </Row>

        <Row className="single__product__about">
          <Col lg={8} xs={12}>
            <Title type='md'>О товаре</Title>
            <p className='single__product__about--body'>
              Футболка из хлопка с добавлением эластана (аналог лайкры): за счет этого ткань немного тянется, хорошо держит форму и комфортно садится по фигуре. Силуэт приталенный, ориентирован на мужчин с широкими плечами и узкими бедрами. Понравится тем, кто хочет подчеркнуть достоинства своего торса и любит футболки “по фигуре”.
            </p>
            <ul className='single__product__about--list'>
              <li>
                Детали: приталенный силуэт, круглый вырез ворота, длина до линии бедра, короткий рукав
              </li>
              <li>
                Состав: 92% хлопок, 8% эластан
              </li>
              <li>
                Правила ухода: перед стиркой вывернуть наизнанку, стирка ручная или машинная в щадящем режиме при температуре не выше 30 градусов, без отбеливателя. Нельзя гладить по принту
              </li>
            </ul>
          </Col>
        </Row>

        <div className="single__product__opinion">
          <Title type='md'>
            Отзывы клиентов
          </Title>
          <Visible xxl xl lg md>
            <Opinion />
          </Visible>
          <Visible xs sm>
            <Row className='single__product__opinion--mobile'>
              <Col xs={12}>
                <OpinionItem />
              </Col>
              <Col xs={12}>
                <OpinionItem />
              </Col>
              <Col xs={12}>
                <OpinionItem />
              </Col>
            </Row>
          </Visible>
          <Row align='center' className='single__product__opinion--btns'>
            <Col sm={3} order={{ sm: 1, xs: 2 }}>
              <Button className='btn__main'>Оставить отзыв</Button>
            </Col>
            <Col sm={2} order={{ sm: 2, xs: 1 }}>
              <p className='single__product__opinion--more'>Смотреть все отзывы</p>
            </Col>
          </Row>
        </div>

        <Title type='md'>Большие скидки</Title>
        <BigActions />

      </section>
    </Styled>
  )
}
