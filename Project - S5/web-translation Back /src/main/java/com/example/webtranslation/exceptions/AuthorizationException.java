package com.example.webtranslation.exceptions;

public class AuthorizationException extends RuntimeException {
    public AuthorizationException() {
        super("Unauthorized");
    }
}
