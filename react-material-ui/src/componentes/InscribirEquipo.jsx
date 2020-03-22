import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  }
}
));


export default function SignInSide() {
    const [state, setState] = React.useState({
        Equipo: '',
        Hackathon: '',

    })

    function changedState(e){
        let value= e.target.value
        setState({
            ...state,
            [e.target.name]: value
        })
    }

    function enviar(){
        console.log(state);
        axios.post(`/equipo/inscribir/`+ state.Hackathon , state)
        .then(() => console.log("soy feliz"))
    }
   

  const classes = useStyles();

  return (<>
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Formulario equipo
          </Typography>
          <form className={classes.form} noValidate>
            <TextField 
              onChange={changedState} 
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Clave del Equipo"
              name="Equipo"
              autoComplete="equipo"
              autoFocus
            />
            <TextField 
              onChange={changedState} 
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Clave de hackathon"
              name="Hackathon"
              autoComplete="equipo"
              autoFocus
            />
            <Button onClick={enviar}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Confirmar
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  </>);
}
