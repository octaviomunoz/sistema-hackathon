import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { HackathonService } from "./Services/HackathonService";

export default class App extends Component{
  constructor(){
    super();
    this.setState({
      hackathon: []
    });
    this.hackathonService = new HackathonService()
  }

  componentDidMount(){
    this.hackathonService.getAll().then(data => {
      console.log(data);
    } )

  }
  render(){
    return(
      <h1>Hola Mundo</h1>
    );
  }
}