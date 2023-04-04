package com.javalearning.registrationform.controller;

import com.javalearning.registrationform.dto.UserDto;
import com.javalearning.registrationform.mapper.UserMapper;
import com.javalearning.registrationform.model.User;
import com.javalearning.registrationform.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@CrossOrigin
@RestController
@RequestMapping(value = "user")
public class UserController extends GenericController<User, UserDto> {

    private final UserService service;

    protected UserController(UserService service, UserMapper mapper) {
        super(service, mapper);
        this.service = service;
    }


    @Operation(description = "Создать запись c проверкой email и телефона на дубликат", method = "Create")
    @PostMapping("/add")
    public ResponseEntity<Object> createUser(@RequestBody UserDto object) {
        if (service.isUserExistByEmail(object.getEmail())) {
            return ResponseEntity.badRequest().body("{\"response\": \"email exists\"}");
        }

        if (service.isUserExistByPhone(object.getPhone())) {
            return ResponseEntity.badRequest().body("{\"response\": \"phone exists\"}");
        }

        return ResponseEntity.status(HttpStatus.OK).body(mapper.toDto(service.create(mapper.toEntity(object))));
    }

}
