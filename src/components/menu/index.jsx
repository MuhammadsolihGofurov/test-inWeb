import React from 'react';
import styled from 'styled-components';
import { get } from 'lodash';
import { Links } from '../../mock/menu';
import { Link } from 'react-router-dom';
import LinkItem from '../link-item';

const Styled = styled.ul`
    display:flex;
    align-items:center;
    justify-content:space-between;
    list-style:none;
    gap: 16px;
`;

export default function Menu({ ...rest }) {
    return (
        <Styled {...rest}>
            {
                Links?.map((link, index) => {
                    return (
                        <LinkItem link={link} key={index} />
                    );
                })
            }
        </Styled>
    )
}
