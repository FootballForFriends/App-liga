import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './home';
import CalendarioJogos from './calendario-jogos';
import Classificacao from './classificacao';

const Routes = () => {
  return (<BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/calendario-jogos' component={CalendarioJogos} />
      <Route exact path='/classificacao' component={Classificacao} />
    </Switch>
  </BrowserRouter>);
}

export default Routes;