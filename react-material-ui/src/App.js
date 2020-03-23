import React, {Component } from 'react';
import './App.css';
import Login from './componentes/Login.jsx';
import NavBar from './componentes/NavBar.jsx';
import Test from './componentes/Test.jsx';
import CrearHacka from './componentes/CrearHacka.jsx';
import Ejemplo from './componentes/vacio.jsx';
import Timer from './componentes/Timer';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import firebase from 'firebase';
import FileUpload from './componentes/FileUpload';
import Countdown from 'react-countdown-now';
import Table from './componentes/Table';
import HackaActiva from './componentes/HackaActiva';
import { Button } from '@material-ui/core';

class App extends Component {
  constructor(){
    super();
    this.state={
      user: null,
      pictures: [],
    };
    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogout= this.handleLogout.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }
  componentWillMount(){
    firebase.auth().onAuthStateChanged(user =>{
      this.setState({
        user: user });
    });

    firebase.database().ref('pictures').on('child_added', snapshot => {
      this.setState({
        pictures: this.state.pictures.concat(snapshot.val())
      })
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
  handleUpload(event)
  {
    const file = event.target.files[0];
    const storageRef = firebase.storage().ref(`/FotosHackathones/${file.name}`);
    const task = storageRef.put(file);
    
    task.on('state_changed' , snapshot =>{
      let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      this.setState({
        uploadValue : percentage
      })
    } , error =>{
      console.log(error.message);
    } , () =>  storageRef.getDownloadURL().then(url =>  {
      const record = {
        image: url
      };

      const dbRef = firebase.database().ref('pictures');
      const newPicture = dbRef.push();
      newPicture.set(record);
      
    }));
  }

  renderLoginButton(){
    //Si el usuario esta logeado
    if(this.state.user){
      return (
        <div>
          <p>
            Hola 
          </p>

       
          <button onClick={this.handleLogout}>Salir</button>

          {
            this.state.pictures.map(picture => (
              <div>
                <img src = {picture.image}/>
                <br/>
             
            

              </div>
            ))
          }
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
          <h1>HACKATHON</h1>

          <Countdown date={Date.now() + 10000*100000} />
          <br/>
          <br/>
          <Button onClick={event =>  window.location.href='/hacka'} variant="contained" color="secondary" >ENTRAR</Button>
        </div>     
      </div>
      <center>
      <FileUpload onUpload={this.handleUpload}/>  
      {
            this.state.pictures.map(picture => (
              <div>
                <img src = {picture.image}/>
                <br/>
              </div>
            )).reverse()
          }
      </center>
      
      </>
      );
  }
}
export default App;