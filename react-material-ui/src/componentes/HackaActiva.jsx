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
import { Container } from '@material-ui/core';
import Nav from './NavBar';

//Object.value()
class HackaActiva extends React.Component {
    constructor(props) {
        super(props)
        this.state = {data: [] }

        }
   /* cambiarestado(){
          this.setState({activo: !this.state.activo});
      }
      */
    componentDidMount(){
        axios.get(`http://localhost:8080/hackathon`)
        .then(res => {
        this.setState({data: [res.data]})
      })
    };
    /* mostrarcosas(){
        axios.get(`http://localhost:8080/hackathon`)
        .then(res => {
        this.setState({data: res.data})
        })
    } */
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
        <Nav/>
        <center> 
            <h1>   Hackathon Activa      </h1> 
        <Container>
        <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Tema</TableCell>
            <TableCell align="right">Descripcion</TableCell>
            <TableCell align="right">fechaRealizacion&nbsp;(g)</TableCell>
            <TableCell align="right">fechaFinalizacionInscripcion&nbsp;(g)</TableCell>
            <TableCell align="right">integrantesMaxEquipo&nbsp;(g)</TableCell>
            <TableCell align="right">integrantesMinEquipo&nbsp;(g)</TableCell>
            <TableCell align="right">activo&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            
          {this.state.data.map(row => (
            <TableRow key={row.id}>

              <TableCell align="right">{row.tema}</TableCell>
              <TableCell align="right">{row.descripcion}</TableCell>
              <TableCell align="right">{row.fechaRealizacion}</TableCell>
              <TableCell align="right">{row.fechaFinalizacionInscripcion}</TableCell>
              <TableCell align="right">{row.integrantesMaxEquipo}</TableCell>
              <TableCell align="right">{row.integrantesMinEquipo}</TableCell>
              <TableCell align="right">{row.activo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </Container>       
      </center>
        </>)
    }
  }
  export default HackaActiva;