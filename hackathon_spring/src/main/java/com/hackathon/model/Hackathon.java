package com.hackathon.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnore;
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

	@JsonIgnore
	@OneToMany(mappedBy = "hakathon", cascade = CascadeType.ALL)
	private List<Equipo> equipos;


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
		return integrantesMinEquipo;
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

	public List<Equipo> getEquipos(){
		return equipos;
	}

	public void setEquipos(List<Equipos> equipos){
		this.equipos = equipos;
	}

}
