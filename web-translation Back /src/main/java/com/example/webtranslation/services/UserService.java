package com.example.webtranslation.services;

import com.example.webtranslation.exceptions.AuthorizationException;
import com.example.webtranslation.exceptions.UserAlreadyExistsException;
import com.example.webtranslation.exceptions.UserNotFoundException;
import com.example.webtranslation.models.User;
import com.example.webtranslation.payload.LoginRequest;
import com.example.webtranslation.payload.LoginResponse;
import com.example.webtranslation.payload.RegistrationRequest;
import com.example.webtranslation.payload.RegistrationResponse;
import com.example.webtranslation.payload.UsersListResponse;
import com.example.webtranslation.repositories.UserRepository;
import com.example.webtranslation.utility.Encryption;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public RegistrationResponse register(RegistrationRequest request) {
        if (userRepository.findByUsername(request.getUsername()) != null) {
            throw new UserAlreadyExistsException();
        }
        User user = userRepository.save(new User(request.getUsername(), request.getEmail(),
                Encryption.md5(request.getPassword()), "user", UUID.randomUUID().toString()));
        return new RegistrationResponse(user.getToken());
    }

    public LoginResponse login(LoginRequest request) {
        String encryptedPassword = Encryption.md5(request.getPassword());
        System.out.println(encryptedPassword);
        User user = userRepository.findByUsername(request.getUsername());
        if (user == null || !user.getPassword().equals(encryptedPassword)) {
            throw new UserNotFoundException();
        }
        return new LoginResponse(user.getToken());
    }

    public UsersListResponse getUsers(String token) {
        User user = userRepository.findByToken(token);
        if (user == null) {
            throw new UserNotFoundException();
        }
        if (!user.getRole().equals("admin")) {
            throw new AuthorizationException();
        }
        return new UsersListResponse(userRepository.findAll());
    }
}
