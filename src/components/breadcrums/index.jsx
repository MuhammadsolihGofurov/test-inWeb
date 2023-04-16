import React from 'react'
import { Visible } from 'react-grid-system'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors } from '../../constants/colors';

const Styled = styled.ul`
    display:flex;
    // gap:20px;
    padding:0 0 30px 0;

    @media screen and (max-width:576px){
        padding:20px 0;
    }

    li{
        position:relative;
        padding-left:30px;
        padding-right:10px;
        font-weight:500;
        font-size:14px;
        a{
            display:flex;
            align-items:center;
            gap:5px;
        }

        &:first-child{
            padding-left:0;
            &::after{
                display:none;
            }
        }
        &::after{
            content:'';
            width:20px;
            height:2px;
            background-color:${Colors?.text_primary};
            position:absolute;
            top:50%;
            left:0;
            transform:translateY(-50%);
        }
        &.old{
            a{
                color:${Colors?.text_secondary};
            }
        }
        &.current{
            a{
                color:${Colors?.text_primary};
            }
            @media screen and (max-width:576px){
                display:none;
            }
        }
    }
`

export default function Breadcrums({ old, current, currentLink, ...rest }) {
    return (
        <Styled className="breadcrums" {...rest}>
            <li className='old'>
                <Link to='/'>
                    <Visible xs>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M3.33325 10.0001C3.33325 9.53984 3.70635 9.16675 4.16659 9.16675H15.8333C16.2935 9.16675 16.6666 9.53984 16.6666 10.0001C16.6666 10.4603 16.2935 10.8334 15.8333 10.8334H4.16659C3.70635 10.8334 3.33325 10.4603 3.33325 10.0001Z" fill="#828282" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.5892 3.57733C10.9146 3.90277 10.9146 4.4304 10.5892 4.75584L5.3451 9.99992L10.5892 15.244C10.9146 15.5694 10.9146 16.0971 10.5892 16.4225C10.2637 16.7479 9.7361 16.7479 9.41066 16.4225L3.57733 10.5892C3.25189 10.2637 3.25189 9.7361 3.57733 9.41066L9.41066 3.57733C9.7361 3.25189 10.2637 3.25189 10.5892 3.57733Z" fill="#828282" />
                        </svg>
                    </Visible>
                    {old}
                </Link>
            </li>
            <li className='current'>
                <Link to={currentLink}>
                    {current}
                </Link>
            </li>
        </Styled>
    )
}
