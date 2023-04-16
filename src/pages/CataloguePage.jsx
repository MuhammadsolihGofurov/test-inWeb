import React, { useState } from 'react'
import styled from 'styled-components'
import { BigActions, Breadcrums, Catalogue, CatalogueTabs, Flex, ProductsAll, Title } from '../components'
import { Col, Row, Visible } from 'react-grid-system';
import { Colors } from '../constants/colors';

const Styled = styled.div`
  .catalogue__title{
    padding-bottom:50px;
  }
  .section__catalogue{
    &--left{
      @media screen and (max-width:1200px){
        display:none;
      }
    }
    .row__system{
      color:${Colors?.main};
      font-weight:500;
      padding-bottom:20px;
      .flex{
        gap:10px;
        transition:all .5s;
      }
    }
  }
`

export default function CataloguePage({ ...rest }) {
  const [isGridSystem, setIsGrid] = useState(true);

  const changeGrid = () => {
    setIsGrid(prev => !prev)
  }

  return (
    <Styled {...rest}>
      <section className="container">
        <Breadcrums old='Главная' current='Каталог' currentLink='/catalogue' />
        <div className="catalogue__title">
          <Title type='lg'>
            Айти
          </Title>
        </div>
        <Row className='section__catalogue'>
          <Col className='section__catalogue--left' xl={3}>
            <Title type='lg'>Каталог</Title>
            <Catalogue />
          </Col>
          <Col className='section__catalogue--right' xl={9} xs={12}>
            <Visible xs>
              <Row className='row__system'>
                <Col xs={6}>
                  <Flex onClick={changeGrid}>
                    {
                      isGridSystem ?
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4 3C3.44772 3 3 3.44772 3 4V8C3 8.55228 3.44772 9 4 9H20C20.5523 9 21 8.55228 21 8V4C21 3.44772 20.5523 3 20 3H4ZM1 4C1 2.34315 2.34315 1 4 1H20C21.6569 1 23 2.34315 23 4V8C23 9.65685 21.6569 11 20 11H4C2.34315 11 1 9.65685 1 8V4Z" fill="#5900E6" /><path fillRule="evenodd" clipRule="evenodd" d="M4 15C3.44772 15 3 15.4477 3 16V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V16C21 15.4477 20.5523 15 20 15H4ZM1 16C1 14.3431 2.34315 13 4 13H20C21.6569 13 23 14.3431 23 16V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V16Z" fill="#5900E6" /></svg>
                        :
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2 3C2 2.44772 2.44772 2 3 2H10C10.5523 2 11 2.44772 11 3V10C11 10.5523 10.5523 11 10 11H3C2.44772 11 2 10.5523 2 10V3ZM4 4V9H9V4H4Z" fill="#5900E6" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M13 3C13 2.44772 13.4477 2 14 2H21C21.5523 2 22 2.44772 22 3V10C22 10.5523 21.5523 11 21 11H14C13.4477 11 13 10.5523 13 10V3ZM15 4V9H20V4H15Z" fill="#5900E6" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M13 14C13 13.4477 13.4477 13 14 13H21C21.5523 13 22 13.4477 22 14V21C22 21.5523 21.5523 22 21 22H14C13.4477 22 13 21.5523 13 21V14ZM15 15V20H20V15H15Z" fill="#5900E6" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M2 14C2 13.4477 2.44772 13 3 13H10C10.5523 13 11 13.4477 11 14V21C11 21.5523 10.5523 22 10 22H3C2.44772 22 2 21.5523 2 21V14ZM4 15V20H9V15H4Z" fill="#5900E6" />
                        </svg>

                    }
                    {isGridSystem ? 'Список' : 'Таблица'}
                  </Flex>
                </Col>
                <Col xs={6}>
                  <Flex>
                    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M0.0928956 0.579123C0.256754 0.225959 0.610687 0 1.00001 0H21C21.3893 0 21.7433 0.225959 21.9071 0.579123C22.071 0.932287 22.015 1.34845 21.7636 1.64573L14 10.8261V19C14 19.3466 13.8206 19.6684 13.5257 19.8507C13.2309 20.0329 12.8628 20.0494 12.5528 19.8944L8.5528 17.8944C8.21402 17.725 8.00001 17.3788 8.00001 17V10.8261L0.236443 1.64573C-0.0149541 1.34845 -0.0709627 0.932287 0.0928956 0.579123ZM3.15532 2L9.76358 9.81427C9.91625 9.9948 10 10.2236 10 10.46V16.382L12 17.382V10.46C12 10.2236 12.0838 9.9948 12.2364 9.81427L18.8447 2H3.15532Z" fill="#5900E6" />
                    </svg>
                    Фильтры
                  </Flex>
                </Col>
              </Row>
            </Visible>
            <CatalogueTabs />
            <ProductsAll isGridSystem={isGridSystem}/>
          </Col>
        </Row>

        <section className='section__actions'>
          <Title type='md'>Большие скидки</Title>
          <BigActions />
        </section>

      </section>
    </Styled>
  )
}
