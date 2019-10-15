package com.hackathon.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hackathon.model.Foto;

public interface FotoRepo extends JpaRepository<Foto, Long>{

}
