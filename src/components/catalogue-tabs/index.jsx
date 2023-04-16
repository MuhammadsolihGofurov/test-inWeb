import React, { useState } from 'react';
import styled from 'styled-components';
import { Tabs } from '../../mock/tabs';
import { get } from 'lodash';
import { Colors } from '../../constants/colors';

const Styled = styled.div`
  .tabs{
    display:flex;
    gap:16px;
    overflow-x:scroll;
    padding-bottom:20px;

    &::-webkit-scrollbar{
      display:none;
    }
    .tab{
      min-width:200px;
      display:flex;
      align-items:center;
      justify-content:center;
      gap:10px;
      border-radius:4px;
      background-color:${Colors?.bg_blue};
      padding:10px 16px;
      cursor:pointer;
      font-weight:600;
      transition:all .5s;

      @media screen and (max-width:576px){
        padding:8px 10px;
        min-width:220px;
      }

      span{
        padding-top:5px;
      }

      &.active , &:hover{
        background-color:${Colors?.main};
        color:${Colors?.white};
        svg{
          path{
            fill:${Colors?.white};
          }
        }
      }
    }
  }
`

export default function CatalogueTabs({ ...rest }) {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <Styled>
      <ul className='tabs'>
        {
          Tabs?.map((tab, index) => {
            return (
              <li
                key={index}
                className={`tab ${activeTab === get(tab, 'id') ? 'active' : ''}`}
              >
                <span dangerouslySetInnerHTML={{ __html: get(tab, 'icon') }} />
                <p>{get(tab, 'name')}</p>
              </li>
            )
          })
        }
      </ul>
    </Styled>
  )
}
