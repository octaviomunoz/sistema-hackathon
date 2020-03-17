import React from 'react';

import {tick} from '../CountDown.jsx';
import UploadImagen from '../imagenes/UploadImagen.jsx';
import Galeria from '../Galeria.jsx';
import Box from '@material-ui/core/Box';


class Home extends React.Component {
  Home(props){

  }


  render() {
    return (
      <Box component="span" m={1}>
          <div>
        <h2> Prueba </h2>
        <p id="time"> </p>
        <tick/>
        <Galeria/>
      </div>
      </Box>
        
    )
  }
};


export default Home;
