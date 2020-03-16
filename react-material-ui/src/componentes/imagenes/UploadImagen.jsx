import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'



const cloudName = 'dnb2ytpdq';

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





};



  const handleChangeStatus = ({ meta }, status) => {
    console.log(status, meta)
  }

  const handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta))
    allFiles.forEach(f => uploadFile(f))
    allFiles.forEach(f => f.remove())
  }

  const uploadFile = (file)=> {
    var url = 'https://api.cloudinay.com/v1_1/${cloudName}/image/upload';
    console.log('el nombre es :'+file.name);
    const formData = new FormData;
    formData.append('file', file);
    formData.append('upload_preset', cloudName);

    /*const response = await axios.post(
        url,
        formData,
    );

    const graphqlResponse = await this.props.mutate({
      variables: {
        name,
        publicId: response.data.public_id,
      },
    });
    */
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
