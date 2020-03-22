import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import Gallery from './Galeria.jsx';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {activo: false,numero:0};
    this.cambiarestado = this.cambiarestado.bind(this);
    }
    cambiarestado(){
        this.setState({activo: !this.state.activo,numero:this.state.numero+1});
    }     
    render() {
      return (<>
        <AppBar title="My App">
            <Toolbar>
          <IconButton onClick={this.cambiarestado} edge="start"  color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Button onClick={event =>  window.location.href='/home'} style={{color: '#FFF'}}>
            HOME
          </Button>
          <Button onClick={event =>  window.location.href='/formulario'} style={{color: '#FFF'}}>
            Formulario Hackathon
          </Button>
          <Button onClick={event =>  window.location.href='/equipo'} style={{color: '#FFF'}}>
            Formulario Equipo
          </Button>
          
          <Button onClick={event =>  window.location.href='/MuestraEquipo'} style={{color: '#FFF'}}>
            Mostrar Equipo
          </Button>


        </Toolbar>
        
        </AppBar>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        
        {this.state.activo && <Gallery/>}
        </>)
    }
  }
  export default Nav;
/* 
    constructor(props) {
        super(props)
        this.state = {activo: false,numero:0};
        this.cambiarestado = this.cambiarestado.bind(this);
        }
        cambiarestado(){
            this.setState({activo: !this.state.activo,numero:this.state.numero+1});
        }  
<>
        <AppBar title="My App">
            <Toolbar>
          <IconButton onClick={this.cambiarestado} edge="start"  color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" >
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
        
        </AppBar>
        {this.state.activo && <Gallery/>}
        </> 
        */