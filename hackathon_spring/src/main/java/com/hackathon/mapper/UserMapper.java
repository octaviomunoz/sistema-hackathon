package com.hackathon.mapper;

import com.hackathon.model.User;
import com.hackathon.controller.presentation.AuthorizationRequest;
import com.hackathon.controller.presentation.UserResponse;

public class UserMapper {

	private UserMapper() {
	}

	public static UserResponse toResponse(User user) {
		return UserResponse.builder().name(user.getName()).id(user.getId()).build();
	}

	public static User toDomain(AuthorizationRequest authorizationRequest) {
		return User.builder().name(authorizationRequest.getUserName()).password(authorizationRequest.getPassword())
				.build();
	}
}
