import React from 'react';
import styled from 'styled-components';
import { Products } from '../../mock/products';
import { Flex, Card, Button, Pagination, Title } from '../';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import { Col, Row, Visible } from 'react-grid-system';

const Styled = styled.div`
    padding:10px 0;
    a{
        display:block;
        margin-bottom:20px;
    }
`;

export default function ProductsAll({ isGridSystem, ...rest }) {
    return (
        <Styled>

            <Row>
                {
                    Products?.map((product, index) => {
                        return (
                            <Col md={4} xs={isGridSystem === true ? 6 : 12} key={index} style={{ transition: 'all .5s' }}>
                                <Link to={`/product/${get(product, 'id')}`} >
                                    <Card item={product} isGrid={isGridSystem} />
                                </Link>
                            </Col>
                        )
                    })
                }
            </Row>
            <Link className='more__btn' to="/catalogue">
                <Button className='more'>Смотреть все</Button>
            </Link>
            <Pagination />
        </Styled>
    )
}
