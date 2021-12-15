import React from 'react';
import styled from 'styled-components';

const Picture = styled.picture`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  & img {
    cursor: pointer;
  }

  & > a{
    position: relative;

    &:hover{

      &::before{
        display: block;
      }

    }

    &::before{
      position: absolute;
      bottom: -6px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1;
      content: '';
      width: 100%;
      height: 2px;
      border-radius: 1px;
      background-color: var(--white);
      display: none;
    }
  }

  @media (min-width: 992px) {
    align-items: end;
    justify-content: end;
  }
`;

export const Social = () => {

  const socials = [
    {alt:'Facebook', src:'./images/icon-facebook.svg'},
    {alt:'Twitter', src:'./images/icon-twitter.svg'},
    {alt:'Pinterest', src:'./images/icon-pinterest.svg'},
    {alt:'Instagram', src:'./images/icon-instagram.svg'},
  ];

  return (
    <Picture>
      {socials.map(({alt, src}) => (<a href="/#" key={alt}><img src={src} alt={alt}/></a>))}
    </Picture>
  )
}
