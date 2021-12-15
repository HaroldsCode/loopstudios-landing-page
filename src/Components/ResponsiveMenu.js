import React from 'react';
import styled from 'styled-components';
import { IoClose } from 'react-icons/io5';

import { Theme } from '../Theme';
import { MenuItem } from './MenuItem';

const Wrapper = styled.aside`
  position:absolute;
  z-index:1;
  top:0;
  left:0;
  background-color:#000;
  height: 100%;
  width: 100vw;
  padding: 5vh 7vw;
  box-sizing: border-box;

  & #nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Close = styled(IoClose)`
  position: relative;
  right: -1.4%;
  color: ${Theme.White};
  width: calc(1rem * 2.4);
  height: calc(1rem * 2.4);

  & > path {
    width: 1rem;
  }
`;

export const ResponsiveMenu = ({toggle}) => {

  return <Wrapper>
      <div id="nav">
        <img src="./images/logo.svg" alt="logo loopstudios"/>
        <Close onClick={toggle}/>
      </div>
      <MenuItem variant="aside"/>
    </Wrapper>
}
