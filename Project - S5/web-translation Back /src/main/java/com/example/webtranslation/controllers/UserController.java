package com.example.webtranslation.controllers;

import com.example.webtranslation.payload.LoginRequest;
import com.example.webtranslation.payload.LoginResponse;
import com.example.webtranslation.payload.RegistrationRequest;
import com.example.webtranslation.payload.RegistrationResponse;
import com.example.webtranslation.payload.UsersListResponse;
import com.example.webtranslation.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @PostMapping("/register")
    public RegistrationResponse register(@RequestBody RegistrationRequest body) {
        return userService.register(body);
    }

    @PostMapping
    public LoginResponse login(@RequestBody LoginRequest body) {
        return userService.login(body);
    }

    @GetMapping
    public UsersListResponse getUsers(@RequestHeader String token) {
        return userService.getUsers(token);
    }
}
