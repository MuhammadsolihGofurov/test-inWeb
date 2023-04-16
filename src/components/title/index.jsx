import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../constants/colors';

const Styled = styled.h2`
    font-weight: bold;
    color:${Colors?.text_primary};

    span{
        color:${Colors?.main};
    }

    &.sm{
        font-size:16px;
    }
    
    &.md{
        font-size:28px;
        @media screen and (max-width:375px){
            font-size:20px;
        }
    }
    &.lg{
        font-size:40px;
        @media screen and (max-width:576px){
            font-size:30px;
        }
        @media screen and (max-width:375px){
            font-size:20px;
        }
    }
`

export default function Title({ type, children, ...rest }) {
    return (
        <Styled className={type} {...rest}>
            {children}
        </Styled>
    )
}
