# Sistema Hackathon

## Sistema Desactualizado

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

Se comienza instalando la carpeta de react  O descargando esto https://we.tl/t-KcC0lIkj0H y pegandolo en la carpeta del proyecto.

```
npx create-react-app hackathon-react
```
* Iniciamos entrando a la carpeta donde se creo react, cd "nombre de la carpeta"
* Iniciamos con
```
npm start
```
* Instalamos Prime faces para React ( https://www.primefaces.org/primereact/showcase/#/setup )


```
npm install primereact --save  
```
```
npm install primeicons --save  
```
* Instalar *AXIOS* Porque sera lo que nos permitira hacer las peticiones http a nuestra Api Rest

```
npm install axios --save 
```

* Instalar cloudinary con el fin de almacenar las fotos en la nube.

```
npm install cloudinary-react --save
```
