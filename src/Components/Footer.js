import React from 'react';

import { MenuItem } from './MenuItem';
import { Social } from './Social';
import { Attribution } from './Attribution';

export const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer__group">
          <img className="footer__brand" src="./images/logo.svg" alt="loopstudios" title="loopstudios"/>
          <MenuItem/>
        </div>
        <div className="footer__group">
          <Social/>
          <p>&copy; 2021 Loopstudios. All rigths reserved.</p>
        </div>
      </div>
      <Attribution/>
    </footer>
  )
}
