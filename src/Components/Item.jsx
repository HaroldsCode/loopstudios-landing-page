import React from 'react';
import styled from 'styled-components';

import { Theme } from '../Theme';

const A = styled.a`
  text-decoration: none;
  color: ${Theme.White};
  font-family: ${(props) => props.size === 'true' ? Theme.JosefinSans : ''};
  font-size: ${(props) => props.size === 'true' ? 'calc(2rem + 1vh)' : '1rem'};
  text-transform: ${(props) => props.size === 'true' ? 'uppercase' : ''};

  &:hover{
    &::before{
      display: block;
    }
  }

  &::before{
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    content: '';
    width: 50%;
    height: 2px;
    border-radius: 1px;
    background-color: var(--white);
    display: none;
  }
  @media (min-width: 992px) {
    font-size: 1.05rem;
  }
`;

export const Item = ({path, children, size = 'false'}) => {
  return (
    <A href={path} size={size}>{children}</A>
  )
}
