package com.hackathon.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import com.hackathon.model.Integrante;
import com.hackathon.model.Equipo;
import com.hackathon.model.Hackathon;

import com.hackathon.repo.EquipoRepo;
import com.hackathon.repo.HackathonRepo;
import com.hackathon.repo.IntegranteRepo;

@RestController
@RequestMapping("/equipo")
public class EquipoController {

  @Autowired
  EquipoRepo equiporepo;
  @Autowired
  HackathonRepo hackathonrepo;
  @Autowired
  IntegranteRepo integranterepo;

  List<Integrante> integrante = new ArrayList<>();


  @PostMapping("/equipo")
  public void setInformacionEquipo(@RequestBody Equipo equipo){

  }
// comentario
  @PostMapping("/integrante/{num}")
  public void setIntegrante(@PathVariable("num") int num, @RequestBody Integrante integrante){
    if (this.integrante.size() <= num){
      this.integrante.add(new Integrante(integrante.getNombre(), integrante.getRun(), integrante.getTalla(), integrante.getEmail(), integrante.getTelefono()));
    }else{
      this.integrante.set(num, new Integrante(integrante.getNombre(), integrante.getRun(), integrante.getTalla(), integrante.getEmail(), integrante.getTelefono()));
    }
  }


}
