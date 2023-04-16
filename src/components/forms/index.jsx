import React from 'react'
import { Col, Row, Visible } from 'react-grid-system'
import styled from 'styled-components'
import { Input, Captcha, Textarea, Button } from '../';

const Styled = styled.form`
    padding:50px 100px 0 100px;

    @media screen and (max-width:1200px){
        padding:50px 0 0 0;
    }

    
    textarea{
        min-height:100%;
        @media screen and (max-width:768px){
            min-height:200px;
            margin-bottom:20px;
        }
    }

    .form__send{
        padding:20px 0 0 0;
        button{
            width:100%;
            height:100%;
        }
        @media screen and (max-width:768px){
            gap:20px 0;
        }
    }
`;

export default function Forms() {
    return (
        <Styled>
            <Row>
                <Col md={6}>
                    <Input margin='20px' placeholder='Имя или Username в Телеграмм*' type='text' />
                    <Input margin='20px' placeholder='Телефон*' type='text' />
                    <Visible sm xs >
                        <Textarea placeholder='Добавь пожелания. Например: хочу футболĸу с приĸрепленным принтом :)' />
                    </Visible>
                    <Input margin='20px' placeholder='Прикрепить файл' isFile type='file' />
                    <Row className='form__send'>
                        <Col md={6} order={{ md: 1, xs: 2 }}>
                            <Button className='btn__send'>
                                Отправить
                            </Button>
                        </Col>
                        <Col md={6} style={{ userSelect: 'none' }} order={{ md: 2, xs: 1 }}>
                            <Captcha />
                        </Col>
                    </Row>
                </Col>
                <Col md={6}>
                    <Visible xxl xxxl xl lg md>
                        <Textarea placeholder='Добавь пожелания. Например: хочу футболĸу с приĸрепленным принтом :)' />
                    </Visible>
                </Col>
            </Row>
        </Styled>
    )
}
