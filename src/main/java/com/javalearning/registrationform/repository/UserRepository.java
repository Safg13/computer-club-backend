package com.javalearning.registrationform.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.javalearning.registrationform.model.User;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    List<User> findAllByName(String name);
    List<User> findUserByPhone(String phone);
    User findUserByEmail(String email);
    boolean existsByEmail(String email);

}
