import React from 'react';

import { Link } from 'react-router-dom';
import './style.css';
import Logo from '../../assets/img/fooxflix.png';
// import ButtonLink from '../ButtonLink'; //using pure css
import { Button } from '../Button'; //using styled components

export default function Menu(){
  return (
    <>
      <nav className="Menu">
        <Link to="/">
          <img className="Logo" src={Logo} alt="Fooxflix logo"/>
        </Link>

        <Button as={Link} className="ButtonLink" to="/cadastro/video">
          Novo vídeo
        </Button>
      </nav>
    </>
  )
}