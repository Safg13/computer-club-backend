package com.javalearning.registrationform.service;

import com.javalearning.registrationform.model.User;
import com.javalearning.registrationform.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserRepository repository;

    protected UserService(UserRepository repository) {
        this.repository = repository;
    }

    public List listAll() {
        return repository.findAll();
    }

    public User getOne(Long id) {
        return repository.findById(id).orElseThrow();
    }

    public User create(User object) {
        return repository.save(object);
    }

    public User update(User object) {
        return repository.save(object);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}
