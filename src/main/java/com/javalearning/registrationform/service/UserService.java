package com.javalearning.registrationform.service;

import com.javalearning.registrationform.model.User;
import com.javalearning.registrationform.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService extends GenericService<User> {
    private final UserRepository repository;

    protected UserService(UserRepository repository) {
        super(repository);
        this.repository = repository;
    }

    public boolean isUserExistByEmail(String email) {
        return repository.existsByEmail(email);
    }

    public boolean isUserExistByPhone(String phone) {
        return repository.existsByPhone(phone);
    }
}
