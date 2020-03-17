# Sistema Hackathon

Para utilizar la API se exponen las siguiente URL:

Sin Autenticacion
|Metodo|URL|Descripcion|
|---|---|---|
|`POST`|`/login` | Iniciar Sesion|
|`GET`|`/hackathon` | Devuelve la hackathon que esta activa|
|`POST`|`/equipo/inscribir/{idHackathon}` | Guarda un equipo asociado en el id de la hackathon|



Con Autenticacion
|Metodo|URL|Descripcion|
|---|---|---|
|`POST`|`/hackathon/guardar` | Guarda una Hackathon|
|`GET`|`/hackathon/{id}` | Devuelve una Hackathon|
|`GET`|`/hackathon/lista` | Devuelve Todas las hackathones finalizadadas|
|`PUT`|`/hackathon` | Modifica la HackathonEntregada|
|`PUT`|`/hackathon/activar/{id}` |publica una hackathon|
|`DELETE`|`/equipo/{idEquipo}` |Elimina un equipo|
|`GET`|`/equipo/{idEquipo}` |Muestra informacion del equipo asociado|





### Ejemplo de uso de login
Para iniciar sesion se enviar un los valores tipo JSON como en el sisguiente ejemplo

```
http://localhost:8080/login

{
  "user" : "user1"
  "pass" : "password1"
}

```
* Nos autenticamos en la aplicacion recibiendo en el campo `authorization` de la cabecera el token

```
authorization →Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMiIsIkNMQUlNX1RPS0VOIjoiIiwiaWF0IjoxNTgyNjY4MDczLCJpc3MiOiJJU1NVRVIiLCJleHAiOjE1ODI2ODI0NzN9.8RfMZNwCvRtCWzWnfsK-21yoQCjIfAPuGOjelu3IkO4
```

* El token se tiene que pasar por la cabecera en toda llamada HTTP que requiera Autorizacion


### React

Se comienza instalando la carpeta de react (No lo hagan porque ya estara creada)

```
npx install create-react-app "Nombre de la carpeta"
```
* Iniciamos entrando a la carpeta donde se creo react, cd "nombre de la carpeta"
* Iniciamos con
```
npm start
```


