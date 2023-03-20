package com.javalearning.registrationform.service;

import com.javalearning.registrationform.model.GenericModel;
import com.javalearning.registrationform.repository.GenericRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public abstract class GenericService <T extends GenericModel> {

    private final GenericRepository<T> repository;

    protected GenericService(GenericRepository<T> repository) {
        this.repository = repository;
    }

    public List<T> listAll() {
        return repository.findAll();
    }

    public T getOne(Long id) {
        return repository.findById(id).orElseThrow();
    }

    public T create(T object) {
        return repository.save(object);
    }

    public T update(T object) {
        return repository.save(object);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

}
