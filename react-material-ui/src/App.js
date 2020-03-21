import React, {Component } from 'react';
import './App.css';
import Login from './componentes/Login.jsx';
import NavBar from './componentes/navBar.jsx';
import Test from './componentes/Test.jsx';
import CrearHacka from './componentes/CrearHacka.jsx';
import Ejemplo from './componentes/vacio.jsx';
import Timer from './componentes/Timer';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import firebase from 'firebase';
import FileUpload from './componentes/FileUpload';
import Countdown from 'react-countdown-now';
import Table from './componentes/Table';

class App extends Component {
  constructor(){
    super();
    this.state={
      user: null
    };
    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogout= this.handleLogout.bind(this);
  }
  componentDidMount(){
    firebase.auth().onAuthStateChanged(user =>{
      this.setState({
        user: user
      });
    })
  }

  handleAuth(){
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(result => console.log(`${result.user.email} ha iniciado sesion`))
    .catch(error => console.log(`Error ${error.code}: ${error.message}`));

  }

  handleLogout(){
    firebase.auth().signOut()
    .then(result => console.log(`${result.user.email} Ha salido con exito`))
    .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }

  renderLoginButton(){
    //Si el usuario esta logeado
    if(this.state.user){
      return (
        <div>
          <p>
            Hola {this.state.user.displayName}!
          </p>
 
          <FileUpload/>
          <button onClick={this.handleLogout}>Salir</button>
        </div>
      )
    }else {  //si no lo está
      return(<button onClick={this.handleAuth}>Login con Google</button>);
    }
   
  }
  
  render (){
    return (<>
      <div className = "App">
        <div className="App-header">
          <h2>Hackathon</h2>
          <Table/>
          <Countdown date={Date.now() + 10000*100000} />

          {this.renderLoginButton()}
        </div>
        <p className = "App-intro">
          
          
        </p>


      </div>


      </>
      );
  }
}
export default App;