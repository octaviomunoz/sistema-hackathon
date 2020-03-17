import React, {Component } from 'react';
import './App.css';
import Login from './componentes/login.jsx';
import NavBar from './componentes/navBar.jsx';
import Test from './componentes/Test.jsx';
import CrearHacka from './componentes/CrearHacka.jsx';
import Ejemplo from './componentes/vacio.jsx';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import {tick} from './componentes/CountDown.jsx';

import Home from './componentes/vistas/Home.jsx';

class App extends Component {
  render (){
    return (<>
      <NavBar/>
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            component={Home} />
          <Route
            exact
            path="/newHackathon"
            render = {() => <CrearHacka />} />
          <Route
            exact
            path="/inicio"
            render = {() => <NavBar/>} />
          </Switch>
        </BrowserRouter>
        <NavBar/>
        </>
      );
  }
}
export default App;
/*
function App() {
  return (<>
    <NavBar/>
    <CrearHacka/>
    <Test/>
    <Ejemplo/>

    </>
  );
}
*/
/*function App(){
  return (<>
  <NavBar/>
  <BrowserRouter>
    <Switch>
      <Route
        path="/"
        component={Home} />
      <Route
        exact
        path="/newHackathon"
        render = {() => <CrearHacka />} />
      <Route
        exact
        path="/inicio"
        render = {() => <NavBar/>} />
      </Switch>
    </BrowserRouter>
    <NavBar/>
    </>
  );
}
export default App;
*/