import React, { useState } from 'react';
import styled from 'styled-components';
import { MainBanner, MainCardSlider, MainAdsSlider, Title, Catalogue, CatalogueTabs, ProductsAll, Categories, Forms, FAQ } from '../components/';
import { Col, Row, Visible } from 'react-grid-system';
import 'swiper/css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import "swiper/css/navigation";
import BigActions from '../components/big-actions';
import { Colors } from '../constants/colors';


const Styled = styled.div`
  .section__home{
    @media screen and (max-width:1200px){
      padding:30px 0 0 0;
    }
  }
  .section__catalogue{
    padding:50px 0;
    @media screen and (max-width:1200px){
      padding: 0;
      &--left{
        display:none;
      }
      &--right{
        h2{
          text-align:center;
          padding-bottom:2rem;
        }
      }
    }
  }
  .section__categories{
    padding:0 0 50px 0;
    @media screen and (max-width:576px){
      padding:0 0 20px 0;
    }
  }
  .section__actions{
    h2{
      text-align:center;
    }
  }
  .section__forms{
    padding:100px 0;
    &--title{
      text-align:center;
      p{
        padding-top:20px;
        font-size:18px;
        font-weight:500;
      }
    }
  }
  .section__faq{
    background-color:${Colors?.bg_primary};
    padding:80px 0;
    &--title{
      p{
        font-weight:500;
        padding-top:20px;
        a{
          color:${Colors?.main};
          text-decoration:underline;
        }
      }
    }
  }
  .section__forYou{
    padding:100px 0;
    &--title{
      p{
        padding-top:20px;
        font-weight:500;
      }
    }
    .forYou__item{
      padding:50px 0 0 0;
      &--title{
        padding-bottom:20px;
      }
      &--body{
        font-weight:500;
        color:${Colors?.text_primary};
        div.body{
          height:99px;
          overflow:hidden;
          transition:all .5s;
          &.active{
            height:auto;
            p{
              padding:15px 0;
            }
            ul{
              padding-left:20px;
              li{
                list-style:disc;
                padding-bottom:10px;
              }
            }
          }
        }
      }

      .btn{
        color:${Colors?.main};
        font-weight:500;
        cursor:pointer;
        padding:5px 0;
        user-select: none;
      }
    }
    @media screen and (max-width:576px){
      padding:50px 0;
      .forYou__item{
        padding:25px 0;
        &--title{
          h2{
            font-size:20px;
          }
        }
      }
    }
  }
`

export default function Home({ ...rest }) {
  const [isForYou, setIsForYou] = useState(false);

  const changeForYou = () => {
    setIsForYou(prev => !prev);
  }

  return (
    <Styled {...rest}>
      <section className='container'>
        <Row className='section__home'>
          <Col xl={8} order={{ xs: 1 }}>
            <MainBanner />
          </Col>
          <Col xl={4} order={{ xl: 2, xs: 3 }}>
            <MainCardSlider />
          </Col>
          <Col xl={12} order={{ xl: 3, xs: 2 }}>
            <MainAdsSlider />
          </Col>
        </Row>
        <Row className='section__catalogue'>
          <Col className='section__catalogue--left' xl={3}>
            <Title type='lg'>Каталог</Title>
            <Catalogue isHome />
          </Col>
          <Col className='section__catalogue--right' xl={9} xs={12}>
            <Visible lg sm md xs>
              <Title type='md'>
                Футболки с принтами, одежда и другие
                товары на заказ
              </Title>
            </Visible>
            <CatalogueTabs />
            <ProductsAll isGridSystem/>
          </Col>
        </Row>
        <section className='section__actions'>
          <Title type='md'>Большие скидки</Title>
          <BigActions />
        </section>
        <section className='section__categories'>
          <Categories />
        </section>
        <section className='section__forms'>
          <div className="section__forms--title">
            <Title type='lg'>Футболĸа с твоим принтом!</Title>
            <p>Заполните форму и наши специалисты свяжутся с вами в телеграмм</p>
          </div>
          <Forms />
        </section>
      </section>
      <section className='section__faq'>
        <section className='container'>
          <Row className='section__faq--title'>
            <Col md={6}>
              <Title>Частые вопросы</Title>
              <p>Все , что вам нужно знать о продукте и товарах. Не можете найти ответ на интересующий вас вопрос? <a href="inweb.uz"> Пожалуйста свяжитесь с нашей командой</a></p>
            </Col>
          </Row>
          <FAQ />
        </section>
      </section>
      <section className='section__forYou'>
        <section className="container">
          <div className="section__forYou--title">
            <Title type='lg'>
              Топовые принты на футболках в магазине <span>ForYou</span>
            </Title>
            <p>Самый широкий выбор оригинальных футболок с принтом на любой вкус и возраст</p>
          </div>
          <Row>
            <Col md={8}>
              <div className="forYou__item">
                <div className="forYou__item--title">
                  <Title>Богатый ассортимент</Title>
                </div>
                <div className="forYou__item--body">
                  <div className={`body ${isForYou ? 'active' : ''}`}>
                    Как бы ни были неповторимы люди и разнообразны жизненные ситуации, в нашем интернет-магазине найдется футболка подходящая для каждого. Любой вариант принта может быть выполнен на мужской футболке, женской или детской. Мы предлагаем полный размерный ряд разнообразных моделей - от маек до лонгсливов.
                    <br />
                    <span style={{ display: isForYou ? 'none' : 'block' }}>...</span>
                    <p>
                      Для удобства выбора каталог систематизирован по основным категориям - тематическим группам, каждая из которых полна приятных сюрпризов и неожиданных дизайнерских решений.
                    </p>
                    <ul>
                      <li>У нас нашли отображение фильмы, мультфильмы, аниме, сериалы и комиксы.</li>
                      <li>
                        Мы не забыли о самых разных животных и поместили их в непредсказуемые ситуации.</li>
                      <li>Яркие деятели искусства, их узнаваемые во всём мире шедевры и стиль.</li>
                      <li>Компьютерные игры, покорившие мир, и фавориты отечественных геймеров, символика профессиональных команд.</li>
                      <li>Выдающиеся личности, проявившие себя в разных областях</li>
                      <li>Футбол в личностных и событийных проявлениях.</li>
                      <li>Стилизации под татуировки.</li>
                      <li>Оригинальные фантазии на космическую тему и многое, многое другое.</li>
                    </ul>
                    <p>
                      Каждый раздел каталога содержит широкий выбор футболок с надписями и/или рисунками. Они могут быть цветными и монохромными, двусторонними или иметь только лицевой принт – все их объединяет исключительное качество печати картинки и натуральных тканей основы.
                    </p>
                  </div>
                  <p className='btn' onClick={changeForYou}>{isForYou ? 'Уменьшать...' : 'Развернуть ...'} </p>
                </div>
              </div>
            </Col>
          </Row>
        </section>
      </section>
    </Styled>
  )
}
