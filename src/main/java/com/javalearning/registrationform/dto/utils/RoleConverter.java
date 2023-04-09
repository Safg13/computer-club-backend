package com.javalearning.registrationform.dto.utils;

import com.javalearning.registrationform.dto.RoleDto;
import com.javalearning.registrationform.model.Role;

public class RoleConverter extends Converter<Role, RoleDto> {
    public RoleConverter() {
        super(RoleConverter::convertToEntity, RoleConverter::convertToDto);
    }

    private static RoleDto convertToDto(Role role) {
        return new RoleDto(role.getId(), role.getTitle(), role.getDescription());
    }

    private static Role convertToEntity(RoleDto roleDto) {
        return Role.builder()
                .id(roleDto.getId())
                .description(roleDto.getDescription())
                .title(roleDto.getTitle())
                .build();
    }
}
