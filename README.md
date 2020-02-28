# Sistema Hackathon

Para utilizar la API se exponen las siguiente URL:

Sin Autenticacion
|Metodo|URL|Descripcion|
|---|---|---|
|`POST`|`/login` | Iniciar Sesion|
|`GET`|`/hackathon` | Devuelve la hackathon que esta activa|


Con Autenticacion
|Metodo|URL|Descripcion|
|---|---|---|
|`POST`|`/hackathon/guardar` | Guarda una Hackathon|
|`GET`|`/hackathon/{id}` | Devuelve una Hackathon|
|`GET`|`/hackathon/lista` | Devuelve Todas las hackathones finalizadadas|


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
