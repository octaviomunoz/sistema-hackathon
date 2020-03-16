import React from 'react';

import {tick} from '../CountDown.jsx';
import UploadImagen from '../imagenes/UploadImagen.jsx';
import Galeria from '../Galeria.jsx';

class Home extends React.Component {
  Home(props){

  }


  render() {
    return (
      <div>
        <h2> Prueba </h2>
        <p id="time"> </p>
        <tick/>
        
        <Galeria/>
   
      </div>
    )
  }
};


export default Home;
