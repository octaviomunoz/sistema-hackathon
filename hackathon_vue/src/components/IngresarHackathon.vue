<template>
  <div class="submitform">
    <div v-if="!submitted">
        <div class="form-group">
          <label for="tema">Tema</label>
          <input type="text" class="form-control" id="tema" required v-model="hackathon.tema" name="tema">
        </div>
    
        <div class="form-group">
          <label for="descripcion">Descripcion</label>
          <input type="text" class="form-control" id="descripcion" required v-model="hackathon.descripcion" name="descripcion">
        </div>
        
         <div class="form-group">
          <label for="FechaRealizacion">Fecha de Realizacion</label>
          <input type="date" class="form-control" id="fechaRealizacion" required v-model="hackathon.fechaRealizacion" name="Fecharealizacion">
        </div>
        
         <div class="form-group">
          <label for="Fechafinalizacioninscripcion">Fecha Finalizacion Inscripcion</label>
          <input type="date" class="form-control" id="fechaFinalizacionInscripcion" required v-model="hackathon.fechaFinalizacionInscripcion" name="fechaFinalizacionInscripcion">
        </div>
        
         <div class="form-group">
          <label for="integrantesMaxEquipo">Integrantes Maximo en Equipo</label>
          <input type="number" class="form-control" id="integrantesMaxEquipo" required v-model="hackathon.integrantesMaxEquipo" name="integrantesMaxEquipo">
        </div>
        
         <div class="form-group">
          <label for="integrantesMinEquipo">Integrantes Minimo en Equipo</label>
          <input type="number" class="form-control" id="integrantesMinEquipo" required v-model="hackathon.integrantesMinEquipo" name="integrantesMinEquipo">
        </div>
        
        <div class="form-group">
          <label for="color">color</label>
          <input type="text" class="form-control" id="color" required v-model="hackathon.color" name="color">
        </div>
        
    
        <button v-on:click="saveHacka" class="btn btn-success">Submit</button>
    </div>
    
    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" v-on:click="newHacka">Add</button>
    </div>
  </div>
</template>
 
<script>
import http from "../http-common";
 
export default {
  name: "add-hackathon",
  data() {
    return {
      hackathon: {
        id: 0,
        tema: "",
        descripcion: "",
        fechaRealizacion: "",
        fechaFinalizacionInscripcion: "",
        integrantesMaxEquipo: 0,
        integrantesMinEquipo: 0,
        color: ""
      },
      submitted: false
    };
  },
  methods: {
    /* eslint-disable no-console */
    saveHacka() {
      var data = {
        tema: this.hackathon.tema,
        descripcion: this.hackathon.descripcion,
        fechaRealizacion: this.hackathon.fechaRealizacion,
        fechaFinalizacionInscripcion: this.hackathon.fechaFinalizacionInscripcion,
        integrantesMaxEquipo: this.hackathon.integrantesMaxEquipo,
        integrantesMinEquipo: this.hackathon.integrantesMinEquipo,
        color: this.hackathon.color
    
      };
 
      http
        .post("/hack/hackathon", data)
        .then(response => {
          this.hackathon.id = response.data.id;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
 
      this.submitted = true;
    },
    newHacka() {
      this.submitted = false;
      this.hackathon = {};
    }
    /* eslint-enable no-console */
  }
};
</script>
 
<style>
.submitform {
  max-width: 300px;
  margin: auto;
}
</style>