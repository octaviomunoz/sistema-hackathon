import React, { Component } from 'react';
import Gallery from './Galeria.jsx';
import Button from '@material-ui/core/Button';

class Test extends Component {
	
	constructor(props) {
        super(props)
        this.state = {activo: false,numero:0,palabra:""};
        this.cambiarestado = this.cambiarestado.bind(this);
        this.cambiarpalabra = this.cambiarpalabra.bind(this)
        }
        cambiarestado(){
            this.setState({activo: !this.state.activo,numero:this.state.numero+1});
        }
        cambiarpalabra(palabra){
            this.setState({palabra: palabra.target.value});
        }
          render() {
        
        return <>
         <h1>I'm the parent component. {this.state.numero} {this.state.palabra}
         </h1>;
         <input type= "text" onChange={this.cambiarpalabra}/>
         <Button variant="contained" color="primary" onClick={this.cambiarestado}>
          Primary
         </Button>
        {this.state.activo && <Gallery/>}
        </>
      }
}
export default Test;
