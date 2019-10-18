package com.hackathon.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.hackathon.model.Hackathon;
import com.hackathon.repo.HackathonRepo;


@RestController
@CrossOrigin(origins = "*",methods= {RequestMethod.GET,RequestMethod.POST})
@RequestMapping("/hack")
public class HackathonController {



	@Autowired
	HackathonRepo hackarepo;

	/*Para listar las hackathones creadas*/
	
	@GetMapping(value="/hackathons")
	public List<Hackathon> getAllHackathon(){

		System.out.println("Mostrar todas las hackathones");
		System.out.println(hackarepo.findAll());
		List<Hackathon> hackathons = new ArrayList<>();
		hackarepo.findAll().forEach(hackathons::add);

		return hackathons;   
	}
	
	/* Para crear Hackathones */
	
	@PostMapping(value="/hackathon")
	public Hackathon postHackathon(@RequestBody Hackathon hackathon) {
		
		Hackathon hacka = hackarepo.save(new Hackathon(hackathon.getTema(),
				hackathon.getDescripcion(),
				hackathon.getFechaRealizacion(),
				hackathon.getFechaFinalizacionInscripcion(),
				hackathon.getIntegrantesMinEquipo(),
				hackathon.getIntegrantesMaxEquipo(),
				hackathon.getColor()));
		return hacka;
	}
	
	/* Para eliminar hackathones*/
	
	@DeleteMapping("/hackathon/{id}")
	public ResponseEntity<String> deleteHacka(@PathVariable("id") long id){
		
		System.out.println("Eliminar hackathon con ID = " + id + "...");
		
		hackarepo.deleteById(id);
		
		return new ResponseEntity<>("Hackathon ha sido eliminada", HttpStatus.OK);
	}
	
	/* Para actualizar hackathones */
	
	@PutMapping("/hackathon/{id}")
	public ResponseEntity<Hackathon> updateHacka(@PathVariable("id") long id, @RequestBody Hackathon hackathon){
		
		System.out.println("Actualizar hackathon con id = " + id + "....");
		
		Optional<Hackathon> hackaDatos = hackarepo.findById(id);
		
		if(hackaDatos.isPresent()) {
			Hackathon hacka = hackaDatos.get();
			hacka.setTema(hackathon.getTema());
			hacka.setDescripcion(hackathon.getDescripcion());
			hacka.setFechaRealizacion(hackathon.getFechaRealizacion());
			hacka.setFechaFinalizacionInscripcion(hackathon.getFechaFinalizacionInscripcion());
			hacka.setIntegrantesMinEquipo(hackathon.getIntegrantesMinEquipo());
			hacka.setIntegrantesMaxEquipo(hackathon.getIntegrantesMaxEquipo());
			hacka.setColor(hackathon.getColor());
			return new ResponseEntity<>(hackarepo.save(hacka), HttpStatus.OK);
			
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}






}
