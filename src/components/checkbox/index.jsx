import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../constants/colors';

const Styled = styled.label`
    // display: block;
    position: relative;
    padding-left: 35px;
    // margin-bottom: 12px;
    cursor: pointer;
    font-size: ${props => props.size };
    display:flex;
    align-items: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding-top:3.4px;

    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
        &:checked ~ .checkmark {
            background-color: ${props => props.isWhite ? Colors?.main : Colors?.main};
        }
        &:checked ~ .checkmark:after {
            display: block;
        }
    }

    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 25px;
        width: 25px;
        background-color: ${props => props.isWhite ? Colors?.white : Colors?.text_grey_5};
        border:2px solid ${Colors?.text_grey_6};
        border-radius: 4px;
        user-select: none;
        &::after{
            content: "";
            position: absolute;
            display: none;
            left: 7px;
            top: 3px;
            width: 5px;
            height: 10px;
            border: solid white;
            border-width: 0 3px 3px 0;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
        }
    }

`

export default function Checkbox({ isWhite , isChecked, size , text, ...rest }) {
    return (
        <Styled className='checkbox__content' isWhite={isWhite} size={size} {...rest}>
            <input type="checkbox"/>
            <span className="checkmark"></span>
            {text}
        </Styled>
    )
}
