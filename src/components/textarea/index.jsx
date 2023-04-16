import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../constants/colors';

const Styled = styled.textarea`
    width: 100%;
    min-height: 200px;
    resize: none;
    border:1px solid ${Colors?.text_grey_5};
    border-radius: 8px;
    padding:20px 20px 20px 30px;
    &:focus{
        outline-color:${Colors?.main};
    }
    @media screen and (max-width:576px){
        padding:20px;
    }
`

export default function Textarea({ placeholder, ...rest }) {
    return (
        <Styled placeholder={placeholder}></Styled>
    )
}
