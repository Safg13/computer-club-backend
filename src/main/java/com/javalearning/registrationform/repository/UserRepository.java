package com.javalearning.registrationform.repository;

import org.springframework.stereotype.Repository;
import com.javalearning.registrationform.model.User;

import java.util.List;

@Repository
public interface UserRepository extends GenericRepository<User> {

    List<User> findAllByName(String name);
    List<User> findUserByPhone(String phone);
    User findUserByEmail(String email);
    boolean existsByEmail(String email);

    boolean existsByPhone(String phone);

}
