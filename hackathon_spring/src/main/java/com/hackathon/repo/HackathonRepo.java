package com.hackathon.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hackathon.model.Hackathon;

public interface HackathonRepo extends JpaRepository<Hackathon, Long>{

}
