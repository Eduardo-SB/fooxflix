import React from 'react';

import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

export default function Video(){
  return (
    <>
      <PageDefault>
          <h1>Cadastrar vídeo</h1>
        
        <Link to="/cadastro/categoria">
          Cadastrar Categoria
        </Link>
      </PageDefault>
    </>
  );
}