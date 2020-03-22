import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import FormularioHacka from "./componentes/FormularioHacka";
import FileUpload from './componentes/FileUpload';
import firebase from 'firebase';
import Login from './componentes/Login.jsx';
import HackaActiva from './componentes/HackaActiva';

firebase.initializeApp({
    apiKey: `AIzaSyCzbd13dkGqRYf8WiBLaxOBee4xEAwhXK8`,
    authDomain: `hackathon-imagenes.firebaseapp.com`,
    databaseURL: `https://hackathon-imagenes.firebaseio.com`,
    storageBucket: `hackathon-imagenes.appspot.com`,
    messagingSenderId: `971190112823`,

});


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path ='/' component= {Login} />
        </Switch>
        <Switch>
            <Route path ='/home' component= {App} />
        </Switch>
        <Switch>
            <Route path ='/hacka' component= {HackaActiva} />
        </Switch>
        <Switch>
            <Route path ='/formulario' component= {FormularioHacka} />
        </Switch>

 
    
    </BrowserRouter>,
    
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
