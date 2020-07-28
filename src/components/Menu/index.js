import React from 'react';
import './style.css';
import Logo from '../../assets/img/fooxflix.png';
import ButtonLink from '../ButtonLink';
import Button from '../Button'; //using styled components

export default function Menu(){
  return (
    <>
      <nav className="Menu">
        <ButtonLink url="/">
          <img className="Logo" src={Logo} alt="Fooxflix logo"/>
        </ButtonLink>

        <Button as="a" className="ButtonLink" url="/">
          Novo vídeo
        </Button>
      </nav>
    </>
  )
}