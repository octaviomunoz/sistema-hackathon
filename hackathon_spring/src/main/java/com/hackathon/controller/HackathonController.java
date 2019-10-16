package com.hackathon.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hackathon.model.Hackathon;
import com.hackathon.repo.HackathonRepo;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/hack")
public class HackathonController {



	@Autowired
	HackathonRepo hackarepo;

	@GetMapping(value="/hackathons")
	public List<Hackathon> getAllHackathon(){

		System.out.println("Mostrar todas las hackathones");
    System.out.println(hackarepo.findAll());
		List<Hackathon> hackathons = new ArrayList<>();
		hackarepo.findAll().forEach(hackathons::add);

		return hackathons;   
	}






}
