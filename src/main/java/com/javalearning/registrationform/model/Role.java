package com.javalearning.registrationform.model;

import com.javalearning.registrationform.dto.RoleDto;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "roles")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Builder
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;

    public Role(RoleDto roleDto) {
        this.id = roleDto.getId();
        this.title = roleDto.getTitle();
        this.description = roleDto.getDescription();
    }
}
