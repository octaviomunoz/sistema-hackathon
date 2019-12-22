import React from 'react';
import './App.css';
import Login from './componentes/login.jsx';
import NavBar from './componentes/navBar.jsx';
import Test from './componentes/Test.jsx';
import CrearHacka from './componentes/CrearHacka.jsx';
import Ejemplo from './componentes/vacio.jsx';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import {tick} from './componentes/CountDown.jsx';



/*
function App() {
  return (<>
    <NavBar/>
    <CrearHacka/>
    <Test/>
    <Ejemplo/>

    </>
  );
}*/

function App(){
  return (
  <BrowserRouter>
    <Switch>
      <Route
        path="/home"
        component={NavBar} />
      <Route
        exact
        path="/newHackathon"
        render = {() => <CrearHacka />} />
      <Route
        exact
        path="/inicio"
        render = {() => <tick/>} />
      </Switch>

    </BrowserRouter>
);
}

export default App;
