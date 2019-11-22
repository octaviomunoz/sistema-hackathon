import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {KeyboardDatePicker} from '@material-ui/pickers';


class CrearHacka extends Component {
	
	constructor(props) {
        super(props)
        this.state = {numero:0,palabra:""};
        this.cambiarpalabra = this.cambiarpalabra.bind(this)
        }
        cambiarpalabra(palabra){
            this.setState({palabra: palabra.target.value});
        }
          render() {
        
        return <>
         <h1>hola que tal . {this.state.palabra}
         </h1>;
         <input type= "text" onChange={this.cambiarpalabra}/>
        
        </>
      }
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    

    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      
        <Typography component="h1" variant="h5">
          Agregar Hackathon
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Tema de Hackathon"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Descripcion de la Hackathon"
            type="text"
            id="password"
            autoComplete="current-password"
          />
         
           <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Fecha de Realizacion"
            type="date"
            id="password"
            autoComplete="current-password"
          />
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Fecha de Termino de Inscripcion"
            type="date"
            id="password"
            autoComplete="current-password"
          />
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Integrantes Minimos a Participar"
            type="number"
            id="password"
            autoComplete="current-password"
          />
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Integrantes Maximos a Participar"
            type="number"
            id="password"
            autoComplete="current-password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
   
    </Container>
  );
}
