package com.hackathon.repository;

import com.hackathon.model.Equipo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;


@Component
public interface EquipoRepository extends JpaRepository<Equipo, Long> {

  Equipo findById(long id);
}
