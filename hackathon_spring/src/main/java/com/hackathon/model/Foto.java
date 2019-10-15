package com.hackathon.model;

import javax.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnore;

import com.hackathon.model.AlbumFoto;

@Entity
@Table(name = "fotos")
public class Foto {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id; 

	private String foto;

	@JsonIgnore
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "id_album")
	private AlbumFoto album;

	public long getId(){
		return id;
	}

	public void setId(long id){
		this.id = id;
	}

	public String getFoto(){
		return foto;
	}

	public void setFoto(String foto){
		this.foto = foto;
	}

	public AlbumFoto getAlbum(){
		return album;
	}

	public void setAlbum(AlbumFoto album){
		this.album = album;
	}


}
