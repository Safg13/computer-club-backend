package com.javalearning.registrationform.controller;

import com.javalearning.registrationform.dto.LoginDto;
import com.javalearning.registrationform.dto.UserDto;
import com.javalearning.registrationform.mapper.UserMapper;
import com.javalearning.registrationform.model.User;
import com.javalearning.registrationform.security.JwtTokenUtil;
import com.javalearning.registrationform.service.UserService;
import com.javalearning.registrationform.service.userDetails.CustomUserDetailsService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@Slf4j
@CrossOrigin
@RestController
@RequestMapping(value = "user")
public class UserController extends GenericController<User, UserDto> {

    private final UserService service;

    private final CustomUserDetailsService customUserDetailsService;

    private final JwtTokenUtil jwtTokenUtil;

    protected UserController(UserService service, UserMapper mapper, CustomUserDetailsService customUserDetailsService, JwtTokenUtil jwtTokenUtil) {
        super(service, mapper);
        this.service = service;
        this.customUserDetailsService = customUserDetailsService;
        this.jwtTokenUtil = jwtTokenUtil;
    }


    @Operation(description = "Создать запись c проверкой email и телефона на дубликат", method = "Create")
    @PostMapping("/add")
    public ResponseEntity<Object> createUser(@RequestBody UserDto object) {

        if (service.isUserExistByEmail(object.getEmail())) {
            return ResponseEntity.badRequest().body("{\"response\": \"email exists\"}");
        }
        else if (service.isUserExistByPhone(object.getPhone())) {
            return ResponseEntity.badRequest().body("{\"response\": \"phone exists\"}");
        }

        return ResponseEntity.status(HttpStatus.OK).body(mapper.toDto(service.create(mapper.toEntity(object))));
    }

    @Operation(description = "Создать JWT токен", method = "Create")
    @PostMapping("/auth")
    public ResponseEntity<?> auth(@RequestBody LoginDto loginDto) {
        Map<String, Object> response = new HashMap<>();

        if(!service.checkPassword(loginDto) || !service.isUserExistByLogin(loginDto.getLogin())) {

            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("{\"response\": \"wrong login or password\"}");
        }

        UserDetails foundUser = customUserDetailsService.loadUserByUsername(loginDto.getLogin());
        String token = jwtTokenUtil.generateToken(foundUser);
        Long userId = service.getUserIdByUsername(loginDto.getLogin());

        response.put("token", token);
        response.put("authorities", foundUser.getAuthorities());
        response.put("userId", userId);

        return ResponseEntity.ok().body(response);
    }

}
