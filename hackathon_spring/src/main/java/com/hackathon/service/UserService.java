package com.hackathon.service;

import com.hackathon.model.User;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService extends UserDetailsService {

	User getUser(long id);

	User save(User user);
}
