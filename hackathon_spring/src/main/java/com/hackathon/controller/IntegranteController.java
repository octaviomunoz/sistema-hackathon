package com.hackathon.controller;

import com.hackathon.model.Integrante;
import com.hackathon.model.Hackathon;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;

import com.hackathon.repository.IntegranteRepository;
import com.hackathon.repository.EquipoRepository;


@RestController
@RequestMapping("/integrante")
@CrossOrigin("*")
public class IntegranteController {
  @Autowired
  IntegranteRepository integranterepo;

  @Autowired
  EquipoRepository equiporepo;

  @PostMapping("/{idEquipo}")
  public ResponseEntity<?> saveIntegrante(@PathVariable long  idEquipo, @RequestBody Integrante integrante){

    if (!equiporepo.existsById(idEquipo)){
      return new ResponseEntity<>("No existe el equipo", HttpStatus.BAD_REQUEST);
    }

    Integrante integranteSave = new Integrante();
    integranteSave.setNombre(integrante.getNombre());
    integranteSave.setRun(integrante.getRun());
    integranteSave.setTalla(integrante.getTalla());
    integranteSave.setEmail(integrante.getEmail());
    integranteSave.setTelefono(integrante.getTelefono());
    integranteSave.setEquipo(equiporepo.findById(idEquipo));

    integranterepo.save(integranteSave);

    return new ResponseEntity<>(integranteSave, HttpStatus.OK);
  }

  @GetMapping("/{idIntegrante}")
  public ResponseEntity<?> getIntegrante(@PathVariable long idIntegrante){
    final Integrante integrante = integranterepo.findById(idIntegrante);

    if (integrante == null){
      return ResponseEntity.notFound().build();
    }

    return new ResponseEntity<>(integrante, HttpStatus.OK);
  }

  @DeleteMapping("/{idIntegrante}")
  public ResponseEntity<?> eliminarIntegrante(@PathVariable long idIntegrante){
    final Integrante integrante = integranterepo.findById(idIntegrante);

    if(integrante == null){
      return ResponseEntity.notFound().build();
    }

    integranterepo.deleteById(idIntegrante);

    return new ResponseEntity<>("Integrante eliminado", HttpStatus.OK);
  }
}
