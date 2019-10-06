package com.hackathon.model;

import javax.persistence.*;
import java.util.List;
import java.util.ArrayList;
import com.fasterxml.jackson.annotation.JsonIgnore;

import com.hackathon.model.Foto;

@Entity
@Table(name="Albunes")
public class AlbumFoto {

  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  private long id;

  private String nombre;

  private boolean visualizarAlbum = false;

  @JsonIgnore
  @OneToMany(mappedBy = "album", cascade = CascadeType.ALL)
  private List<Foto> fotos = new ArrayList<>();

  public long getId(){
    return id;
  }

  public void setId(long id){
    this.id = id;
  }

  public String getNombre(){
    return nombre;
  }

  public void setNombre(String nombre){
    this.nombre = nombre;
  }

  public boolean getVisualizarAlbum(){
    return visualizarAlbum;
  }

  public void setVisualizarAlbum(boolean visualizarAlbum){
  this.visualizarAlbum = visualizarAlbum;
  }

  public List<Foto> getFotos(){
    return fotos;
  }
}
