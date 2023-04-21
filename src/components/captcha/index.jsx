import React from 'react';
import styled from 'styled-components';
import Checkbox from '../checkbox';
import { Col, Row } from 'react-grid-system';
import img from '../../assets/images/re.png';
import { Colors } from '../../constants/colors';

const Styled = styled.div`
    padding:10px;
    border:1px solid ${Colors?.text_grey_5};
    font-weight:500;
`

export default function Captcha({ ...rest }) {
    return (
        <Styled>
            <Row align={'center'} justify={'center'}>
                <Col xs={9} >
                    <Checkbox text='I’m not a robot' size='12px'/>
                </Col>
                <Col xs={3} style={{textAlign: 'end'}}>
                    <img src={img} alt="captcha" />
                </Col>
            </Row>
        </Styled>
    )
}
