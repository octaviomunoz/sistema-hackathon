import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import Gallery from './Galeria.jsx';


class Ejemplo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {data: [] , activo:false }
        this.cambiarestado = this.cambiarestado.bind(this)
        this.mostrarcosas=this.mostrarcosas.bind(this);
        }
    cambiarestado(){
          this.setState({activo: !this.state.activo});
      }
    componentDidMount(){
        axios.get(`http://localhost:8080/hack/hackathons`)
        .then(res => {
        this.setState({data: res.data})
      })
        };
    mostrarcosas(){
        axios.get(`http://localhost:8080/hack/hackathons`)
        .then(res => {
        this.setState({data: res.data})
        })
    }
    render() {
      const classes= makeStyles({
        root: {
          width: '100%',
          overflowX: 'auto',
        },
        table: {
          minWidth: 650,
        },
      });
      return (<>
        <center>  <Button variant="contained" color="primary" onClick={this.mostrarcosas}>
                     Primary
                    </Button>
             <h1>   Hola, este es una prueba,       </h1> 
        <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Fotos</TableCell>
            <TableCell>Tema</TableCell>
            <TableCell align="right">Descripcion</TableCell>
            <TableCell align="right">fechaRealizacion&nbsp;(g)</TableCell>
            <TableCell align="right">fechaFinalizacionInscripcion&nbsp;(g)</TableCell>
            <TableCell align="right">integrantesMaxEquipo&nbsp;(g)</TableCell>
            <TableCell align="right">integrantesMinEquipo&nbsp;(g)</TableCell>
            <TableCell align="right">color&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.data.map(row => (
            <TableRow key={row.id}>
              <TableCell align="right"><button className= "btn btn-success" onClick={this.cambiarestado}> ver fotos </button> </TableCell>
              <TableCell component="th" scope="row">
                {row.tema}
              </TableCell>
              <TableCell align="right">{row.descripcion}</TableCell>
              <TableCell align="right">{row.fechaRealizacion}</TableCell>
              <TableCell align="right">{row.fechaFinalizacionInscripcion}</TableCell>
              <TableCell align="right">{row.integrantesMaxEquipo}</TableCell>
              <TableCell align="right">{row.integrantesMinEquipo}</TableCell>
              <TableCell align="right">{row.color}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {this.state.activo && <Gallery/>}
       
          </center>
        </>)
    }
  }
  export default Ejemplo;