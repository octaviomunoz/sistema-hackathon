import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Gallery from './Galeria.jsx';

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
          <Typography variant="h6" >
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
        </AppBar>

        {this.state.activo && <Gallery/>}
        </>)
    }
  }
  export default Nav;