package com.javalearning.registrationform.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserDto extends GenericDto {
    private String name;
    private String email;
    private String login;
    private String phone;
    private String password;
    private int roleId;
}
