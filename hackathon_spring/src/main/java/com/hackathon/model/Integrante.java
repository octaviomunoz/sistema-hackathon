package com.hackathon.model;

import javax.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.hackathon.model.Equipo;

@Entity
@Table(name="integrantes")
public class Integrante{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	private String nombre;

	private String run;

	private String talla;

	private String email;

	private String telefono;

	public Integrante(String nombre, String run, String talla, String email, String telefono){
		this.nombre = nombre;
		this.run = run;
		this.talla = talla;
		this.email = email;
		this.telefono = telefono;
	}

	@JsonIgnore
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "id_equipo")
	private Equipo equipo;


	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public String getNombre() {
		return nombre;
	}


	public void setNombre(String nombre) {
		this.nombre = nombre;
	}


	public String getRun() {
		return run;
	}


	public void setRun(String run) {
		this.run = run;
	}


	public String getTalla() {
		return talla;
	}


	public void setTalla(String talla) {
		this.talla = talla;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getTelefono() {
		return telefono;
	}


	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}


	public Equipo getEquipo() {
		return equipo;
	}


	public void setEquipo(Equipo equipo) {
		this.equipo = equipo;
	}





}
