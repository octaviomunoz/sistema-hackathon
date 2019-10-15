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

	private String descripcion;

	private Date fechaRealizacion;

	private Date fechaFinalizacionInscripcion;

	private int integrantesMaxEquipo;

	private int integrantesMinEquipo = 1;

	private String color;



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

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
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

	public int getIntegrantesMaxEquipo() {
		return integrantesMaxEquipo;
	}

	public void setIntegrantesMaxEquipo(int integrantesMaxEquipo) {
		this.integrantesMaxEquipo = integrantesMaxEquipo;
	}

	public int getIntegrantesMinEquipo() {
		return integrantesMaxEquipo;
	}

	public void setIntegrantesMinEquipo(int integrantesMinEquipo) {
		this.integrantesMinEquipo = integrantesMinEquipo;
	}

	public String getColor(){
		return color;
	}

	public void setColor(String color){
		this.color = color;
	}

}
