package com.hackathon.controller;

import java.util.List;
import java.util.Date;

import com.hackathon.model.Hackathon;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;

import com.hackathon.repository.HackathonRepository;



@RestController
@RequestMapping("/hackathon")
@CrossOrigin
public class HackathonController {

  @Autowired
  HackathonRepository hackathonrepo;


  @PreAuthorize("hasRole('ROLE_USER') or hasRole('ROLE_ADMIN')")
  @PostMapping("/guardar")
  public ResponseEntity<Hackathon> saveHackathon(@RequestBody Hackathon hackathon){

    Hackathon hackathonSave = new Hackathon();
    hackathonSave.setTema(hackathon.getTema());
    hackathonSave.setDescripcion(hackathon.getDescripcion());
    hackathonSave.setFechaRealizacion(hackathon.getFechaRealizacion());
    hackathonSave.setFechaFinalizacionInscripcion(hackathon.getFechaFinalizacionInscripcion());
    hackathonSave.setIntegrantesMaxEquipo(hackathon.getIntegrantesMaxEquipo());
    hackathonSave.setIntegrantesMinEquipo(hackathon.getIntegrantesMinEquipo());

    hackathonrepo.save(hackathonSave);
    return new ResponseEntity<>(hackathonSave, HttpStatus.OK);
  }

  @PreAuthorize("hasRole('ROLE_USER') or hasRole('ROLE_ADMIN')")
  @GetMapping("/{id}")
  public ResponseEntity<Hackathon> getHackathon(@PathVariable long id){
    final Hackathon hacka = hackathonrepo.findById(id);

    if (hacka == null) {
      return ResponseEntity.notFound().build();
    }

    return new ResponseEntity<>(hacka, HttpStatus.OK);
  }

  @GetMapping()
  public ResponseEntity<?> getHackathonActiva(){
    final Hackathon hacka = hackathonrepo.findByActivoTrue();

    if (hacka == null) {
      String mensaje = "No hay una hackathon activa";
      return new  ResponseEntity<String>(mensaje, HttpStatus.NOT_FOUND);
    }

    return new ResponseEntity<Hackathon>(hacka, HttpStatus.OK);
  }

  @PreAuthorize("hasRole('ROLE_ADMIN')")
  @GetMapping("/lista")
  public ResponseEntity<?> getListaHackathon(){

    List<Hackathon> listasHacka = hackathonrepo.findByFechaRealizacionBefore(new Date());

    if (listasHacka == null){
      return new ResponseEntity<String>("No hay hackathones", HttpStatus.NOT_FOUND);
    }
    return new ResponseEntity<>(listasHacka, HttpStatus.OK);
  }

  @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
  @PutMapping
  public ResponseEntity<?> modificarHackathon(@RequestBody Hackathon hackathon){
    Hackathon hacka_modificado = hackathonrepo.findById(hackathon.getId());

    hacka_modificado.setTema(hackathon.getTema());
    hacka_modificado.setDescripcion(hackathon.getDescripcion());
    hacka_modificado.setFechaRealizacion(hackathon.getFechaRealizacion());
    hacka_modificado.setFechaFinalizacionInscripcion(hackathon.getFechaFinalizacionInscripcion());
    hacka_modificado.setIntegrantesMaxEquipo(hackathon.getIntegrantesMaxEquipo());
    hacka_modificado.setIntegrantesMinEquipo(hackathon.getIntegrantesMinEquipo());

    hackathonrepo.save(hacka_modificado);

    return new ResponseEntity<>(hacka_modificado, HttpStatus.OK);
  }

  @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
  @PutMapping("/activar/{id}")
  public ResponseEntity<?> cambiarEstadoActivo(@PathVariable long id){
    Hackathon hackaActiva = hackathonrepo.findByActivoTrue();

    if (hackaActiva != null) {
      return new ResponseEntity<>("Ya existe una hackathon activa", HttpStatus.CONFLICT);

    }else{
      hackaActiva = hackathonrepo.findById(id);
      hackaActiva.setActivo(true);
      hackathonrepo.save(hackaActiva);
      return new ResponseEntity<>(hackaActiva, HttpStatus.OK);

    }

  }
}
