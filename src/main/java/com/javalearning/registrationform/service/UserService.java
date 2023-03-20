package com.javalearning.registrationform.service;

import com.javalearning.registrationform.model.User;
import com.javalearning.registrationform.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService extends GenericService<User> {
    private final UserRepository repository;

    protected UserService(UserRepository repository) {
        super(repository);
        this.repository = repository;
    }

    public boolean doesUserExistByEmail(String email) {
        return repository.existsByEmail(email);
    }
}
