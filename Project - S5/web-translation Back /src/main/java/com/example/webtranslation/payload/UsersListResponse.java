package com.example.webtranslation.payload;

import com.example.webtranslation.models.User;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class UsersListResponse {
    private List<User> users;
}
