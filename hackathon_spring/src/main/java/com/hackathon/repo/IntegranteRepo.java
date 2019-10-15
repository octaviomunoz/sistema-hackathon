package com.hackathon.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hackathon.model.Integrante;

public interface IntegranteRepo extends JpaRepository<Integrante, Long>{

}
