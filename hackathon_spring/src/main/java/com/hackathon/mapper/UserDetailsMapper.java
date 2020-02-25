package com.hackathon.mapper;

import com.hackathon.model.Role;
import com.hackathon.model.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.HashSet;
import java.util.Set;

public class UserDetailsMapper {

	public static UserDetails build(User user) {
		return new org.springframework.security.core.userdetails.User(user.getName(), user.getPassword(), getAuthorities(user));
	}

	private static Set<? extends GrantedAuthority> getAuthorities(User retrievedUser) {
		Set<Role> roles = retrievedUser.getRoles();

		Set<SimpleGrantedAuthority> authorities = new HashSet<>();

		roles.forEach(role -> authorities.add(new SimpleGrantedAuthority("ROLE_" + role.getName())));

		return authorities;
	}
}
