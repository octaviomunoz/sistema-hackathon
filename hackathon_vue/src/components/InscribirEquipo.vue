<template>
  <div class="submitform">
    <div v-if="!submitted">
      <h4>Inscribir Equipo</h4>
      <div class="form-group">
        <label for="nombre">Nombre Equipo</label>
        <input type="text" class="form-control" id="nombre" v-model="equipo.nombre" name="nombre">
      </div>
      <div class="form-group">

      </div>

    </div>
    <h4>Inscribir Equipo</h4>
    <div class="">
      <label>Nombre Equipo</label>
      <input type="text" name="" value="">
    </div>
  </div>
</template>

<script>
export default {
  name: "inscripcion"
};
</script>

<style>
</style>
