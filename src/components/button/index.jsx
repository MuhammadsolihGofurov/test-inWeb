import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../constants/colors';

const Styled = styled.button`
  padding:15px 40px;
  border:none;
  border-radius:4px;
  cursor:pointer;


  @media screen and (max-width: 768px) {
    padding:10px 20px;
  }
  @media screen and (max-width: 768px) {
    padding:10px;
  }

  &.btn__white , &.btn__dark , &.btn__main{
    background:transparent;
    border:2px solid ${Colors?.white};
    color: ${Colors?.white};
    font-weight: bold;
    font-size: 16px;
    letter-spacing:1px;
    transition:all .5s;
    &:hover{
      background:${Colors?.white};
      color:${Colors?.main};
    }
    @media screen and (max-width: 768px) {
      font-size:14px;
    }
    @media screen and (max-width: 375px) {
      font-size:12px;
    }
  }

  &.more{
    width:100%;
    background-color:${Colors?.bg_blue};
    color:${Colors?.text_primary};
    font-weight:600;
    transition:all .5s;
    &:hover{
      background:${Colors?.text_grey_6};
      color:${Colors?.text_primary};
    }
  }

  &.btn__dark{
    border-color:${Colors?.text_primary};
    color:${Colors?.text_primary};
    padding:12px 16px;
    font-weight:600;
    &:hover{
      background:${Colors?.text_primary};
      color:${Colors?.white};
      border-color:transparent;
    }
  }

  &.btn__send{
    background-color:${Colors?.main};
    color:${Colors?.white};
    font-weight:bold;
  }

  &.btn__main{
    border:1px solid ${Colors?.main};
    color:${Colors?.main};
    font-weight:bold;
    &:hover{
      background:${Colors?.main};
      color:${Colors?.white};
    }
  }
  
`

export default function Button({ children, className, ...rest }) {
  return (
    <Styled {...rest} className={className}>
      {children}
    </Styled>
  )
}
