import React from 'react';
import styled from 'styled-components';

import { Item } from './Item';

const variants = {
  aside: `
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(7vw,-50%);
    gap: calc(1rem + 1vh);
    & > li {
      position: relative;
      display: flex;
      align-self: start;
    }
    @media landscape {
      flex-direction: row;
    }
  `,
  normal: `
    flex-direction: column;
    gap: 1.6rem;
    & > li {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    @media screen and (min-width: 751px){
      flex-direction: row;
    }
    @media (min-width: 992px) {
      gap: 2.5rem;
    }
    `,
}

const Menu = styled.ul`
  padding: 0;
  display: flex;
  ${(props) => variants[props.variant || 'normal']}
  
`;


export const MenuItem = ({variant}) => {

  const items = [
    {name: 'About', path:'#'},
    {name: 'Carrers', path:'#'},
    {name: 'Events', path:'#'},
    {name: 'Products', path:'#'},
    {name: 'Support', path:'#'},
  ];

  return (
    <Menu variant={variant}>
      {items.map(({name, path}) => <li key={name}><Item path={path} size={variant === 'aside' ? 'true' : 'false'}>{name}</Item></li>)}
    </Menu>
  )
}


