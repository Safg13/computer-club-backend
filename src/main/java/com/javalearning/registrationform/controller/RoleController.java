package com.javalearning.registrationform.controller;

import com.javalearning.registrationform.model.Role;
import com.javalearning.registrationform.service.RoleService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("role")
public class RoleController {
    private final RoleService service;

    public RoleController(RoleService service) {
        this.service = service;
    }

    @GetMapping("/list")
    public List<Role> list() {
        return service.getList();
    }
}
