import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { IoMenu } from 'react-icons/io5';
import { Theme } from '../Theme';
import { MenuItem } from './MenuItem';

import mobileImg from '../mobile.jpg';
import desktopImg from '../desktop.jpg';

const MenuBars = styled(IoMenu)`
  position: relative;
  right: -1.4%;
  color: ${Theme.White};
  width: calc(1rem * 3);
  height: calc(1rem * 3);
`;


export const Header = ({showMenu}) => {
  
  const [mobile, setMobile] = useState(window.screen.width > 768)
  const [currentWidth, setCurrentWidth] = useState(window.screen.width)

  useEffect(() => {
    const validator = window.screen.width < 768;
    setMobile(current => current = validator)
  }, [currentWidth])

  window.addEventListener('resize', function(e){
    setCurrentWidth(current => current = window.screen.width)
  });

  return (
    <header>
      <div></div>
      <img src={mobile ? mobileImg : desktopImg} alt="background" />
      <section>
        <nav className="navbar">
          <img src="./assets/images/logo.svg" alt="logo loopstudios" className="brand"/>
          
          {mobile && <MenuBars onClick={showMenu}/> }
          {!mobile && <MenuItem/> }
        </nav>
        <div className="navbar__card">
          <h1 className="navbar__title">Immersive Experiences That Deliver</h1>
        </div>
      </section>
    </header>
  )
}
