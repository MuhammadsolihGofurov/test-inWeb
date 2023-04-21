import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../constants/colors';
import { Shadows } from '../../constants/shadow';

const Styled = styled.ul`
    position:relative;
    text-align:center;
    .lang__menu{
        color:${Colors?.text_secondary};
        font-weight:500;
        cursor: pointer;
        &--more{
            position: absolute;
            background-color:${Colors?.white};
            box-shadow:${Shadows?.button};
            left:50%;
            margin-top:6px;
            border-radius: 8px;
            overflow:hidden;
            visibility:hidden;
            opacity:0;
            transition:.5s;
            transform:translate( -50% , 10%);
            z-index:99;
            li{
                padding: 11px 16px;
                &:hover{
                    color:${Colors?.white};
                    background-color:${Colors?.main};
                }
            }
        }
        &:hover{
            .lang__menu{
                &--more{
                    opacity:1;
                    visibility:visible;
                    transform:translate(-50% , 0%);
                }
            }
        }
    }
`

export default function Lang({ ...rest }) {
    return (
        <Styled {...rest}>
            <li className='lang__menu'>
                Ru
                <ul className='lang__menu--more'>
                    <li>Uzbek</li>
                    <li>English</li>
                </ul>
            </li>
        </Styled>
    )
}
