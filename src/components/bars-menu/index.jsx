import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Catalogue from '../catalogue';
import { Catalogues } from '../../mock/catalogue';
import { get } from 'lodash';
import { Colors } from '../../constants/colors';
import { Link } from 'react-router-dom';

const Styled = styled.div`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    max-height:100vh;
    background-color:rgba(255 , 255 , 255 , 1);
    z-index:-1;
    padding:130px 20px 20px 20px;
    overflow-y:scroll;
    opacity:0;
    visibility:hidden;
    transition:all .5s;
    &.active{
        opacity:1;
        visibility:visible;
        z-index:999;
    }
    
    
    .bars__menu{
        &--content{
            transition:all .5s;
            position:relative;
            li{
                .name{
                    font-weight:600;
                }
                .count{
                    color:${Colors?.text_placeholder};
                }
                a{
                    padding-bottom:20px;
                    display:flex;
                    gap:20px;
                    user-select:none;
                    color:${Colors?.text_primary};
                }
            }
        }
    }
`

export default function BarsMenu({ ...rest }) {
    const { bars } = useSelector(state => state.settings);

    return (
        <Styled className={`${bars ? 'active' : ''}`}>
            <ul className='bars__menu--content'>
                {
                    Catalogues?.map((cat, index) => {
                        return (
                            <li
                                key={index}
                            >
                                <Link to='/'>
                                    <span className='name'>{get(cat, 'name')}</span>
                                    <span className='count'>{get(cat, 'count')}</span>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </Styled>
    )
}
