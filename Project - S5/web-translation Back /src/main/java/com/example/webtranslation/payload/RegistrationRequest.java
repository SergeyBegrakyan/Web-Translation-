package com.example.webtranslation.payload;

import lombok.Data;

@Data
public class RegistrationRequest {
    private String username;
    private String password;
    private String email;
}
