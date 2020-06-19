import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Produto from './pages/Produto';
import CadProduto from './pages/CadProduto';

export default function BasicExample() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/produtos" component={Produto} />
        <Route path="/cadProdutos" component={CadProduto} />
      </Switch>
    </BrowserRouter>
  );
}
