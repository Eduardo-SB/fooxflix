import React from 'react';
import Menu from '../src/components/Menu';
import Data from '../src/data/dados_iniciais.json';
import BannerMain from '../src/components/BannerMain';
import Carousel from '../src/components/Carousel';
import Footer from '../src/components/Footer';

function App() {
  return (
    <>
      <Menu />

      <BannerMain
        videoTitle={Data.categorias[0].videos[0].titulo}
        url={Data.categorias[0].videos[0].url}
        videoDescription={"O que é FRONT-END? Trabalhando na área"}
      />

      <Carousel
        ignoreFirstVideo
        category={Data.categorias[0]}
      />
      <Carousel
        category={Data.categorias[1]}
      />
      <Carousel
        category={Data.categorias[2]}
      />
      <Carousel
        category={Data.categorias[3]}
      />
      <Carousel
        category={Data.categorias[4]}
      />
      <Carousel
        category={Data.categorias[5]}
      />

      <Footer />
    </>
  );
}

export default App;
