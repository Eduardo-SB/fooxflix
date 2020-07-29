import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import Home from '../src/Pages/Home';
import Video from './Pages/Cadastro/Video';
import Categoria from './Pages/Cadastro/Categoria';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cadastro/video" exact component={Video} />
      <Route path="/cadastro/categoria" exact component={Categoria} />
      <Route component={() => (<div>Pagina 404</div> )} />
    </Switch>
  </BrowserRouter>
  ,
  document.getElementById('root')
);
