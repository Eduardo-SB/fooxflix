/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { FooterBase } from './styles';
import LogoFoox from '../../assets/img/avatar.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.fooxit.com.br/">
        <img src={LogoFoox} alt="Logo FooxIT" />
      </a>
      <p>
        Criado com muito ❤️ 
      </p>
    </FooterBase>
  );
}

export default Footer;
