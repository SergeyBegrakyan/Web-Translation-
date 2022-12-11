package com.example.webtranslation.exceptions;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException() {
        super("username or password was wrong");
    }
}
