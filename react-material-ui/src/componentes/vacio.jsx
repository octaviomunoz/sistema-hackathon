import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';


class Ejemplo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {};
        }
    mostrarcosas(){
        axios.get(`http://localhost:8080/hack/hackathons`)
        .then(res => {
        console.log(res)
        })
    }  
    render() {
      return (<>
        <center>  <Button variant="contained" color="primary" onClick={this.mostrarcosas}>
                     Primary
                    </Button>
             <h1>   Hola, este es una prueba  </h1>   </center>
        </>)
    }
  }
  export default Ejemplo;