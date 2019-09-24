package com.hackathon.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "hackathons")
public class Hackathon {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	private String tema;

	private Date fechaRealizacion;

	private Date fechaFinalizacionInscripcion;

	private int integrantesPorEquipo = 3;

	/*
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTema() {
		return tema;
	}

	public void setTema(String tema) {
		this.tema = tema;
	}

	public Date getFechaRealizacion() {
		return fechaRealizacion;
	}

	public void setFechaRealizacion(Date fechaRealizacion) {
		this.fechaRealizacion = fechaRealizacion;
	}

	public Date getFechaFinalizacionInscripcion() {
		return fechaFinalizacionInscripcion;
	}

	public void setFechaFinalizacionInscripcion(Date fechaFinalizacionInscripcion) {
		this.fechaFinalizacionInscripcion = fechaFinalizacionInscripcion;
	}

	public int getIntegrantesPorEquipo() {
		return integrantesPorEquipo;
	}

	public void setIntegrantesPorEquipo(int integrantesPorEquipo) {
		this.integrantesPorEquipo = integrantesPorEquipo;
	}

	*/

}
