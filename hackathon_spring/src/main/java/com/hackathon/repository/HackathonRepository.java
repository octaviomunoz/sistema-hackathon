package com.hackathon.repository;

import com.hackathon.model.Hackathon;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
import java.util.Date;
import java.util.List;


@Component
public interface HackathonRepository extends JpaRepository<Hackathon, Long> {

  Hackathon findById(long id);

  Hackathon findByActivoTrue();

  Hackathon findByFechaRealizacion(Date fecha);

  List<Hackathon> findByFechaRealizacionBefore(Date fecha);
}
