import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../constants/colors';

const Styled = styled.input`
    width: 100%;
    -webkit-appearance: none;
    appearance: none;
    cursor: pointer;
    border: none;
    
    &::-webkit-slider-runnable-track{
        background:${Colors?.main};
        height: 0.5rem;
    }

    &::-webkit-slider-runnable-track {
        background: rgba(89, 0, 230, 0.3);
        height: 0.5rem;
        border-radius:10px;
        border:none;
    }
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        margin-top: -4px;
        background-color: ${Colors?.main};
        height: 1rem;
        width: 1rem;
        border-radius: 50%;   
    }

`

export default function Range() {
    return (
        <Styled type='range' className='range' />
    )
}
