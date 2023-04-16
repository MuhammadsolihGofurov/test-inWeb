import React from 'react';
import styled from 'styled-components';

const Styled = styled.div`
    &.flex{
        display:flex;
        align-items:center;
        justify-content:${props => props.justify};
        gap:${props => props.gap};
        flex-wrap:${props => props.wrap};

        @media screen and (max-width:576px){
            justify-content:${props => props.justify === 'space-between' ? 'center' : props.justify};
        }
    }
`

export default function Flex({ wrap, children, gap, justify, ...rest }) {
    return (
        <Styled
            justify={justify}
            wrap={wrap}
            {...rest}
            gap={gap}
            className='flex'
        >
            {children}
        </Styled>
    )
}
