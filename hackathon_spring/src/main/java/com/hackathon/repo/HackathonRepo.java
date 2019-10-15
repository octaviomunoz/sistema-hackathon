package com.hackathon.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hackathon.model.Hackathon;

@Repository
public interface HackathonRepo extends JpaRepository<Hackathon, Long>{

}
