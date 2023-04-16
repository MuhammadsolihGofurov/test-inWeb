import { get } from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors } from '../../constants/colors';

const Styled = styled.li`
    a{
        color:${props => props.isWhite ? Colors?.white : Colors?.text_primary};
        font-weight:${props => props.isWhite ? '500' : '600'};
        position:relative;
        z-index:0;
        transition:all .5s linear;
        &::after{
            content:'';
            position:absolute;
            bottom:-1px;
            right:0;
            width:0%;
            height:2px;
            background-color:${Colors?.main};
            z-index:-1;
            transition:all .5s linear;
        }
        &:hover{
            color:${Colors?.main};
            &::after{
                width:100%;
                left:0;
                right:auto;
            }
        }
    }
`

export default function LinkItem({ children, link, isWhite, ...rest }) {
    return (
        <Styled isWhite={isWhite} {...rest}>
            <Link to={get(link, 'url')} className='hover__link'>
                {get(link, 'name')}
            </Link>
        </Styled>
    )
}
