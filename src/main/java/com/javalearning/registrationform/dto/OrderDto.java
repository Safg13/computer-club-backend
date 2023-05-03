package com.javalearning.registrationform.dto;

import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OrderDto extends GenericDto{

    private LocalDateTime appointmentFullDate;
    private LocalDate appointmentDay;
    private Integer roomId;
    private Integer pcId;
    private UserDto user;

}
