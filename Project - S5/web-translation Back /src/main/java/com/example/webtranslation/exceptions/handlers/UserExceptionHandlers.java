package com.example.webtranslation.exceptions.handlers;

import com.example.webtranslation.exceptions.AuthorizationException;
import com.example.webtranslation.exceptions.UserAlreadyExistsException;
import com.example.webtranslation.exceptions.UserNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class UserExceptionHandlers {
    @ExceptionHandler(value = UserAlreadyExistsException.class)
    public ResponseEntity<Object> exception(UserAlreadyExistsException e) {
        return new ResponseEntity<>(HttpStatus.CONFLICT);
    }

    @ExceptionHandler(value = UserNotFoundException.class)
    public ResponseEntity<Object> exception(UserNotFoundException e) {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(value = AuthorizationException.class)
    public ResponseEntity<Object> exception(AuthorizationException e) {
        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }
}
