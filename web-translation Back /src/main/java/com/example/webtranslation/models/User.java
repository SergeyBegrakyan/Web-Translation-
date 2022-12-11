package com.example.webtranslation.models;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("users")
@Data
public class User {
    @Id
    private String id;
    private String username;
    private String email;
    private String password;
    private String role;
    private String token;

    public User(String username, String email, String password, String role, String token) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
        this.token = token;
    }
}
