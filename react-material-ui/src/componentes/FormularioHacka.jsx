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
        tema: '',
        descripcion: '',
        fecha_realizacion: "2020-04-31",
        fecha_finalizacion_inscripcion: "2020-03-28",
        integrantes_max_equipo: '',
        integrantes_min_equipo: '',
        activo: false

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
        axios.post(`http://localhost:8080/hackathon/guardar`, state)
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
            Formulario Creacion Hackathon
          </Typography>
          <form className={classes.form} noValidate>
            <TextField 
                onChange={changedState} 
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="tema"
              label="Tema Hackathon"
              name="tema"
              autoComplete="tema"
              autoFocus
            />
            <TextField
                onChange={changedState}
                variant="outlined"
                margin="normal"
                required
                    fullWidth
                    id="descripcion"
                    label="Descripcion Hackathon"
                    name="descripcion"
                    autoComplete="descripcion"
                    autoFocus
            />
           <TextField
            onChange={changedState}
               variant="outlined"
               margin="normal"
               required
               fullWidth
               name="fecha_realizacion"
               label="Fecha Realizacion "
               type="date"
               className={classes.textField}
               InputLabelProps={{
               shrink: true,
               }}
            />
            <TextField
             onChange={changedState}
               variant="outlined"
               margin="normal"
               required
               fullWidth
               name="fecha_finalizacion_inscripcion"
               label="Fecha Finalizacion Inscripcion "
               type="date"
               className={classes.textField}
               InputLabelProps={{
               shrink: true,
               }}
            />
            <TextField 
             onChange={changedState}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="integrantes_max_equipo" label="Integrantes Maximos por Equipo" select>
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
            <MenuItem value="4">4</MenuItem>
            <MenuItem value="5">5</MenuItem>
            </TextField>
            <TextField 
             onChange={changedState}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="integrantes_min_equipo" label="Integrantes Minimos por Equipo" select>
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
            <MenuItem value="4">4</MenuItem>
            <MenuItem value="5">5</MenuItem>
            </TextField>
            
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
