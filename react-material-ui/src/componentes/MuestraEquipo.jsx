import React from 'react';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Nav from './NavBar';

//Object.value()
class MuestraEquipo extends React.Component {
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
            <h1>   Lista De Equipo    </h1> 
        <Container>
        <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Id Integrante</TableCell>
            <TableCell align="right">Nombre</TableCell>
            <TableCell align="right">Run</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Talla</TableCell>
            <TableCell align="right">Telefono</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
            
          {this.state.data.map(row => (
            <TableRow key={row.id}>

              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.nombre}</TableCell>
              <TableCell align="right">{row.run}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.talla}</TableCell>
              <TableCell align="right">{row.telefono}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </Container>       
      </center>
        </>)
    }
  }
  export default MuestraEquipo;