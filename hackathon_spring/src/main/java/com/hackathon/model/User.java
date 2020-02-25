package com.hackathon.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

@Entity
@Builder
@AllArgsConstructor
@Data
@Table(name="users")
public class User implements Serializable{

	private User() {
	}

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;

	@Column
	private String name;

	@Column
	private String password;

	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "USER_ROLES", joinColumns = {
			@JoinColumn(name = "USER_ID") }, inverseJoinColumns = {
			@JoinColumn(name = "ROLE_ID") })
	private Set<Role> roles;
}
