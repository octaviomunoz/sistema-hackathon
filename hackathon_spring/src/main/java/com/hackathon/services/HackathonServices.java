package com.hackathon.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hackathon.model.Hackathon;
import com.hackathon.repo.HackathonRepo;

@Service
public class HackathonServices {
	
	@Autowired
	private HackathonRepo hackarepo;
	
	public List<Hackathon> getAllHacka() {
		
		return hackarepo.findAll();
		
	}
	
	public void insert (Hackathon hackathon) {
		
		hackarepo.save(hackathon);
		
	}
	
}
