package com.javalearning.registrationform.controller;

import com.javalearning.registrationform.dto.UserDto;
import com.javalearning.registrationform.mapper.UserMapper;
import com.javalearning.registrationform.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping(value = "user")
public class UserController {

    private final UserService service;

    private final UserMapper mapper;

    public UserController(UserService service, UserMapper mapper) {
        this.service = service;
        this.mapper = mapper;
    }

    @Operation(description = "Получить список всех записей", method = "GetAll")
    @GetMapping("/list")
    public ResponseEntity<List<UserDto>> getAll() {
        return ResponseEntity.ok().body(service.listAll().stream().map(mapper::toDto).toList());
    }

    @Operation(description = "Получить запись по id", method = "GetOne")
    @GetMapping("/{id}") //localhost:9090/user/1
    public ResponseEntity<?> getById(@PathVariable Long id) {
        return ResponseEntity.status(HttpStatus.OK).body(mapper.toDto(service.getOne(id)));
    }

    @Operation(description = "Создать запись", method = "Create")
    @PostMapping
    public ResponseEntity<UserDto> create(UserDto object) { //RequestBody UserDto object изменил чтобы жрало x-www-form urlencoded
        return ResponseEntity.status(HttpStatus.OK).body(mapper.toDto(service.create(mapper.toEntity(object))));
    }

    @Operation(description = "Обновить запись", method = "Update")
    @PutMapping("/{id}")
    public ResponseEntity<UserDto> update(@RequestBody UserDto object, @PathVariable Long id) {
        object.setId(id);
        return ResponseEntity.status(HttpStatus.OK).body(mapper.toDto(service.update(mapper.toEntity(object))));
    }

    @Operation(description = "Удалить запись", method = "Delete")
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }

}
