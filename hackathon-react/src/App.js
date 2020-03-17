import React, {useState, useEffect} from 'react';
import { CloudinaryContext, Image } from "cloudinary-react";
import { fetchPhotos, openUploadWidget } from "./CloudinaryService";
import './App.css';
function App() {
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
}

export default App;



/*export default class App extends Component{
  constructor(){
    super();
    this.state= {};
    this.hackathonService = new HackathonService()
  } 
  componentDidMount(){
    this.hackathonService.getAll().then(data => {
      console.log(data);
    } )

  }
  render(){
    return(
      <h1>Hola Mundo</h1>
    );
  }
    */
