import React from 'react';

import {tick} from '../CountDown.jsx';

class Home extends React.Component {
  Home(props){

  }

  render() {
    return (
      <div>
        <h2> Prueba </h2>
        <p id="time"> </p>
        <tick/>
      </div>
    )
  }
};


export default Home;
