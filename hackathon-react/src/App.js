import React, {useState, useEffect} from 'react';
import { Component } from 'react';
import { CloudinaryContext, Image } from "cloudinary-react";
import { fetchPhotos, openUploadWidget } from "./CloudinaryService";
import './App.css';
//import {DataTable} from 'primereact/datatable';
//import {Column} from 'primereact/column';
//import { HackathonService } from './Services/HackathonService';
//import {Panel} from 'primereact/panel';

//import 'primereact/resources/themes/nova-light/theme.css';
//import 'primereact/resources/primereact.min.css';
//import 'primeicons/primeicons.css';


import Login from './componentes/Login.jsx';


function App() {

  const instancia = new Login();
  const resultado = instancia.render();

  return resultado;


}


/* function App() {
>>>>>>> 8636259eb221846b98f041acc1f32711216e9b39
  const [images, setImages] = useState([])

  const beginUpload = tag => {
    const uploadOptions = {
      cloudName: "nitrogenoo",
      tags: [tag, 'anImage'],
      uploadPreset: "upload"
    };
    openUploadWidget(uploadOptions, (error, photos) => {
      if (!error) {
        console.log(photos);
        if(photos.event === 'success'){
          setImages([...images, photos.info.public_id])
        }
      } else {
        console.log(error);
      }
    })
  }

  useEffect( () => {
    fetchPhotos("image", setImages);
  }, [])




  return (
   <CloudinaryContext cloudName="nitrogenoo">
      <div className="App">
        <button onClick={() => beginUpload("image")}>Upload Image</button>
      <section>
        {images.map(i => <Image
              key={i}
              publicId={i}
              fetch-format="auto"
              quality="auto"
            />)}
      </section>
    </div>
   </CloudinaryContext>
  );
}*/

export default App;


/*
export default class App extends Component{
  constructor(){
    super();
    this.state= {};
    this.item = [
      {
        label : 'Hola',
        icon  : 'pi pi-fw pi-plus',
        command: () => {alert('que pasa larva')}
      },
      {
        label : 'hola 2',
        icon  : 'pi pi-fw pi-pencil',
        command: () => {alert('que pasa larva2')}
      },
      {
        label : 'hola 3',
        icon  : 'pi pi-fw pi-trash',
        command: () => {alert('que pasa larva3')}
      }
    ]


    this.hackathonService = new HackathonService()
  }
  componentDidMount(){
    this.hackathonService.getAll().then(data => this.setState({hackathon : data}))

  }
  render(){
    return(

      <Menubar model = {this.item}/>
      <Panel header = "react" style={{width:'50%', margin: '0 auto', marginTop: '20px'}}>
        <DataTable value = {this.state.personas}>
          <Column field = "id" header ="ID"></Column>
          <Column field = "nombre?" header ="nombre"></Column>
          <Column field = "apellido?" header ="apellido"></Column>
        </DataTable>
      </Panel>

    );
  }

}*/
