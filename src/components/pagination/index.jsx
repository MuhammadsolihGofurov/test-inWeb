import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../constants/colors';

const Styled = styled.ul`
    display:flex;
    justify-content:center;
    align-items:center;
    gap:10px;
    padding:20px 0;
    svg{
        padding-top:5px;
    }
    @media screen and (max-width:576px){
        gap:0;
    }
    li{
        padding:10px 15px;
        font-weight:500;
        color:${Colors?.text_primary};
        border-radius:5px;
        cursor:pointer;
        transition:all .5s;

        &.double__arrow{
            padding:5px;
            svg{
                path{
                    stroke:${Colors?.text_placeholder};
                }
            }

            &.dark{
                svg{
                    path{
                        stroke:${Colors?.text_primary};
                    }
                }
            }
        }
        &.single__arrow{
            padding:5px;
            svg{
                path{
                    fill:${Colors?.text_placeholder};
                }
            }
            &.dark{
                svg{
                    path{
                        fill:${Colors?.text_primary};
                    }
                }
            }
        }

        &.number.active , &:hover{
            background-color:${Colors?.main};
            color:${Colors?.white};
        }
        &.none{
            display:none;
        }
        @media screen and (max-width:576px){
            &.mobileNone{
                display:none;
            }
        }
    }
`

export default function Pagination({ ...rest }) {
    return (
        <Styled {...rest}>
            <li className='double__arrow'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 17L6 12L11 7" stroke="#BDBDBD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M18 17L13 12L18 7" stroke="#BDBDBD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </li>
            <li className='single__arrow'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.7071 5.29289C16.0976 5.68342 16.0976 6.31658 15.7071 6.70711L10.4142 12L15.7071 17.2929C16.0976 17.6834 16.0976 18.3166 15.7071 18.7071C15.3166 19.0976 14.6834 19.0976 14.2929 18.7071L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L14.2929 5.29289C14.6834 4.90237 15.3166 4.90237 15.7071 5.29289Z" fill="#BDBDBD" />
                </svg>
            </li>
            <li className='number active'>1</li>
            <li className='number'>2</li>
            <li className='number mobileNone'>3</li>
            <li className='number'>...</li>
            <li className='number mobileNone'>8</li>
            <li className='number'>9</li>
            <li className='single__arrow dark'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z" fill="#242424" />
                </svg>
            </li>
            <li className='double__arrow dark'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 17L18 12L13 7" stroke="#242424" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 17L11 12L6 7" stroke="#242424" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </li>
        </Styled>
    )
}
