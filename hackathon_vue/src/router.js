import Vue from "vue";
import Router from "vue-router";

import InscribirEquipo from "./components/InscribirEquipo.vue"

import ListarHacka from "./components/ListarHacka.vue"

import IngresarHackathon from "./components/IngresarHackathon.vue"

Vue.use(Router);

export default new Router({

  mode: "history",
  routes: [
    {
      path: "/inscripcion",
      name: "inscripcion",
      component: InscribirEquipo
    },
    {path: "/hackathon",name: "hackathon",component: ListarHacka
     },
     {path: "/addhacka",name: "addhacka",component: IngresarHackathon
     }
  ]

});
