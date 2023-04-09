package com.javalearning.registrationform.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "users")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class User extends GenericModel{

    @Column(name = "name")
    private String name;

    @Column(name = "email")
    private String email;

    @Column(name = "phone")
    private String phone;

    @Column(name = "password")
    private String password;

    @Column(name = "role_id")
    private int roleId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "roles_id", foreignKey = @ForeignKey(name = "FK_USER_ROLES"))
    private Role role;
}
