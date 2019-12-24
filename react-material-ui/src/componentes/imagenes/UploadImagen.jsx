import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'


import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';


class UploadImagen extends Component {
  Constructor(props){

  }

  render(){
    return (
      <div>
          <Dropzone
            onChangeStatus={handleChangeStatus}
            onSubmit={handleSubmit}
            styles={{ dropzone: { minHeight: 200, maxHeight: 250 } }}></Dropzone>
          <h2>Hola</h2>
      </div>
  );
  }

  ImagenSelecionada(files){

  }

};



  const handleChangeStatus = ({ meta }, status) => {
    console.log(status, meta)
  }

  const handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta))
    allFiles.forEach(f => f.remove())
  }

export default UploadImagen;
/*
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';


class UploadImagen extends React.Component {
  UploadImagen(props){

  }

  subirImagen() {

  }

  mostrarImagen(){

  }

  render() {
    return (
      <div>
        <h2>Subir Imagen </h2>
        <input type="file"
            name = "file"
            onChange={this.subirImagen}
          />
        <input type="submit"/>
      </div>
    )
  }

};


export default UploadImagen;
*/
