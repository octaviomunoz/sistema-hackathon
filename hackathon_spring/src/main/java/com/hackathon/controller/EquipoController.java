package com.hackathon.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import com.hackathon.model.Integrante;
import com.hackathon.model.Equipo;

import com.hackathon.repo.EquipoRepo;

@RestController
@RequestMapping("/equipo")
public class EquipoController {

  @Autowired
  EquipoRepo equiporepo;

  @GetMapping("/equipos")
  public List<Equipo> getAllEquipos(){
    System.out.println("Muestra todos los equipos");

    List<Equipo> equipos = new ArrayList<>();
    equiporepo.findAll().forEach(equipos::add);

    return equipos;
  }

}
