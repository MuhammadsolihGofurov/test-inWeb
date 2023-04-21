import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../constants/colors';

const Styled = styled.div`
    position: relative;
    z-index:0;
    border:${props => props.isFile ? `2px solid ${Colors?.main}` : `none`};
    padding:${props => props.isFile ? `10px 18px` : ''};
    display:${props => props.isFile ? `flex` : ''};
    align-items:center;
    justify-content:center;
    gap:10px;
    color:${Colors?.main};
    border-radius:8px;
    overflow:${props => props.label ? '' : 'hidden'};
    font-weight:600;
    
    input{
        border:${props => props.isFile ? 'none' : `1px solid ${Colors?.text_grey_5}`};
        width:100%;
        padding:16px 18px;
        border-radius:8px;
        margin-bottom:${props => props.margin};
        &.file{
            cursor:pointer;
            width:100%;
            height:100%;
            position:absolute;
            top:0;
            left:0;
            opacity:0;
        }

        &:focus{
            outline-color:${Colors?.main};
        }
    }

    label{
        position:absolute;
        background-color:${Colors?.white};
        font-size:14px;
        color:${Colors?.text_grey_2};
        top:-12px;
        left:10px;
        padding:5px 2px;
    }

`

export default function Input({ label, placeholder, type, margin, isFile, ...rest }) {
    return (
        <Styled margin={margin} isFile={isFile} label={label}>
            {
                isFile ?
                    <>
                        <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_0_872)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M4.92883 13.4142C4.17868 14.1644 3.75725 15.1818 3.75725 16.2427C3.75725 17.3035 4.17868 18.321 4.92883 19.0711C5.67897 19.8212 6.69639 20.2427 7.75725 20.2427C8.28254 20.2427 8.80269 20.1392 9.28799 19.9382C9.77329 19.7372 10.2142 19.4425 10.5857 19.0711L12.707 16.9498C13.0975 16.5593 13.7307 16.5593 14.1212 16.9498C14.5117 17.3403 14.5117 17.9735 14.1212 18.364L11.9999 20.4853C11.4427 21.0425 10.7813 21.4844 10.0534 21.786C9.3254 22.0875 8.54518 22.2427 7.75725 22.2427C6.16595 22.2427 4.63983 21.6105 3.51461 20.4853C2.38939 19.3601 1.75725 17.834 1.75725 16.2427C1.75725 14.6514 2.38939 13.1253 3.51461 12L5.63593 9.87871C6.02646 9.48819 6.65962 9.48819 7.05015 9.87871C7.44067 10.2692 7.44067 10.9024 7.05015 11.2929L4.92883 13.4142ZM9.87857 7.05029C9.48805 6.65976 9.48805 6.0266 9.87857 5.63607L11.9999 3.51475C12.557 2.9576 13.2185 2.51565 13.9464 2.21412C14.6744 1.91259 15.4546 1.75739 16.2425 1.75739C17.0305 1.7574 17.8107 1.91259 18.5386 2.21412C19.2666 2.51565 19.928 2.9576 20.4852 3.51475C21.0423 4.07191 21.4843 4.73334 21.7858 5.46129C22.0873 6.18925 22.2425 6.96946 22.2425 7.75739C22.2425 8.54532 22.0873 9.32554 21.7858 10.0535C21.4843 10.7814 21.0423 11.4429 20.4852 12L18.3639 14.1214C17.9733 14.5119 17.3402 14.5119 16.9496 14.1214C16.5591 13.7308 16.5591 13.0977 16.9496 12.7071L19.071 10.5858C19.4424 10.2144 19.737 9.77343 19.9381 9.28813C20.1391 8.80283 20.2425 8.28268 20.2425 7.7574C20.2425 7.23211 20.1391 6.71196 19.9381 6.22666C19.737 5.74136 19.4424 5.3004 19.071 4.92897C18.6995 4.55753 18.2586 4.26289 17.7733 4.06188C17.288 3.86086 16.7678 3.75739 16.2425 3.7574C15.7172 3.75739 15.1971 3.86086 14.7118 4.06188C14.2265 4.26289 13.7855 4.55753 13.4141 4.92897L11.2928 7.05029C10.9023 7.44081 10.2691 7.44081 9.87857 7.05029Z" fill="#5900E6" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M8.46443 15.5355C8.07391 15.145 8.07391 14.5118 8.46443 14.1213L14.1213 8.46441C14.5118 8.07388 15.145 8.07388 15.5355 8.46441C15.926 8.85493 15.926 9.4881 15.5355 9.87862L9.87864 15.5355C9.48812 15.926 8.85496 15.926 8.46443 15.5355Z" fill="#5900E6" />
                            </g>
                            <defs>
                                <clipPath id="clip0_0_872">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        </span>
                        <span>{placeholder}</span>
                        <input type='file' className='file' />
                    </>
                    :
                    <>
                        <label label={label}>
                            {label}
                        </label>
                        <input
                            placeholder={placeholder}
                            type={type}
                            {...rest}
                        />
                    </>
            }
        </Styled>
    )
}
