package com.hackathon.repository;

import com.hackathon.model.Integrante;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

@Component
public interface IntegranteRepository extends JpaRepository<Integrante, Long> {
  
}
