package com.hackathon.controller;

import java.util.Date;

import com.hackathon.model.Equipo;
import com.hackathon.model.Hackathon;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;

import com.hackathon.repository.EquipoRepository;
import com.hackathon.repository.HackathonRepository;


@RestController
@RequestMapping("/equipo")
@CrossOrigin
public class EquipoController {
  @Autowired
  EquipoRepository equiporepo;

  @Autowired
  HackathonRepository hackathonrepo;

  @PostMapping("/inscribir/{idHackathon}")
  public ResponseEntity<?> saveEquipo(@RequestBody Equipo equipo, @PathVariable long idHackathon){

    if(!hackathonrepo.existsById(idHackathon)){
      return new ResponseEntity<>("La Hackathon no existe", HttpStatus.BAD_REQUEST);
    }
    Hackathon hacka = hackathonrepo.findById(idHackathon);
    if (!hacka.getActivo()){
      return new ResponseEntity<>("La hackathon a la que intenta inscribir no esta disponible", HttpStatus.BAD_REQUEST);
    }

    if(hacka.getFechaFinalizacionInscripcion().compareTo(new Date()) < 0){
      return new ResponseEntity<>("Inscripcion Fuera de plazo", HttpStatus.BAD_REQUEST);
    }

    Equipo equipoSave = new Equipo();
    equipoSave.setNombre(equipo.getNombre());
    equipoSave.setHackathon(hacka);

    equiporepo.save(equipoSave);

    return new ResponseEntity<>(equipoSave, HttpStatus.OK);

  }

  @PutMapping
  public ResponseEntity<?> modificarEquipo(@RequestBody Equipo equipo){
    Equipo equipo_modificado = equiporepo.findById(equipo.getId());

    equipo_modificado.setNombre(equipo.getNombre());

    equiporepo.save(equipo_modificado);

    return new ResponseEntity<>(equipo_modificado, HttpStatus.OK);

  }

  @GetMapping("/{idEquipo}")
  public ResponseEntity<Equipo> getEquipo(@PathVariable long idEquipo){
    final Equipo equipo = equiporepo.findById(idEquipo);

    if (equipo == null){
      return ResponseEntity.notFound().build();
    }

    return new ResponseEntity<>(equipo, HttpStatus.OK);
  }

  @DeleteMapping("/{idEquipo}")
  public ResponseEntity<?> eliminarEquipo(@PathVariable long idEquipo){
    final Equipo equipo = equiporepo.findById(idEquipo);

    if (equipo == null){
      return ResponseEntity.notFound().build();
    }

    equiporepo.deleteById(idEquipo);

    return new ResponseEntity<>("Equipo fue Eliminado", HttpStatus.OK);
  }

}
