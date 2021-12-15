import React from 'react';
import styled from 'styled-components';
import { Theme } from '../Theme';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1.5rem 0 3.5rem 0;
  a, span{
    color: ${Theme.White}
  }
  
  @media (min-width: 992px) {
    flex-direction: row;
    a{
      font-size: 1.05rem;
    }
  }
`;

export const Attribution = () => {
  return  <Div>
      <div>
        <span>Challenge by</span>&nbsp;<a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
      </div>
      <div>
        <span>Coded by</span>&nbsp;<a href="https://haroldmoreno.com/" target="_blank" rel="noreferrer">Harold Moreno</a>.
      </div>
    </Div>
}
