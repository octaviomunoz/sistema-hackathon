package com.hackathon.model;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnore;

import com.hackathon.model.Integrante;

@Entity
@Table(name="equipos")
public class Equipo {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;

	private String nombre;

	@JsonIgnore
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "id_foto")
	private long foto;

	@JsonIgnore
	@OneToMany(mappedBy = "equipo", cascade = CascadeType.ALL)
	private List<Integrante> integrantes = new ArrayList<>();

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

	public long getFoto() {
		return foto;
	}

	public void setFoto(long foto) {
		this.foto = foto;
	}

	public List<Integrante> getIntegrantes() {
		return integrantes;
	}

	public void setIntegrantes(List<Integrante> integrantes) {
		this.integrantes = integrantes;
	}

}
