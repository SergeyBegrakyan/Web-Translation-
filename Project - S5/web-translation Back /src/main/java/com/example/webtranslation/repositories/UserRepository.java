package com.example.webtranslation.repositories;

import com.example.webtranslation.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {
    User findByUsername(String username);
    User findByToken(String token);
}
