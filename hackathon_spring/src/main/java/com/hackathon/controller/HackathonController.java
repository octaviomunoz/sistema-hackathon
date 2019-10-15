package com.hackathon.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hackathon.model.Hackathon;
import com.hackathon.repo.HackathonRepo;
import com.hackathon.services.HackathonServices;

@RestController
public class HackathonController {
  
	@Autowired
	HackathonServices hackaservi;
	
	@GetMapping(value="/hackathons")
	public List<Hackathon> hackatons(){
		
		return hackaservi.getAllHacka();
		
	}
	
	@PostMapping(value="/hackathon")
	public void createhacka (@RequestBody Hackathon hackathon) {
		
		hackaservi.insert(hackathon);
	}
	
	
	
	
}
