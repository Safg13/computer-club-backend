package com.javalearning.registrationform.service;

import com.javalearning.registrationform.dto.LoginDto;
import com.javalearning.registrationform.model.User;
import com.javalearning.registrationform.repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService extends GenericService<User> {
    private final UserRepository repository;

    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    private final RoleService roleService;

    protected UserService(UserRepository repository, BCryptPasswordEncoder bCryptPasswordEncoder, RoleService roleService) {
        super(repository);
        this.repository = repository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
        this.roleService = roleService;
    }

    @Override
    public User create(User user) {
        user.setRole(roleService.getOne(3L));
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        user.setLogin(user.getEmail()); //приравниваем логин к емейлу
        return repository.save(user);
    }

    public User createModerator(User user) {
        user.setRole(roleService.getOne(2L));
        user.setPassword(user.getPassword());
        return repository.save(user);
    }

    public User getByLogin(String login) {
        return repository.findUserByLogin(login);
    }

    public boolean checkPassword(LoginDto loginDto) {
        if (isUserExistByLogin(loginDto.getLogin())) {
            return bCryptPasswordEncoder.matches(loginDto.getPassword(), getByLogin(loginDto.getLogin()).getPassword());
        } else {
            return false;
        }
    }

    public boolean isUserExistByEmail(String email) {
        return repository.existsByEmail(email);
    }

    public boolean isUserExistByLogin(String login) {
        return repository.existsByLogin(login);
    }

    public boolean isUserExistByPhone(String phone) {
        return repository.existsByPhone(phone);
    }

    public Long getUserIdByUsername(String login) {
        return repository.findUserByLogin(login).getId();
    }
}
