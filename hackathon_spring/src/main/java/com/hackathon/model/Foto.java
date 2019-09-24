package com.hackathon.model;

import javax.persistence.*;

@Entity
@Table(name = "fotos")
public class Foto {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private String nombre;
	
	
}
