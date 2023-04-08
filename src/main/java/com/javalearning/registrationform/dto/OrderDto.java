package com.javalearning.registrationform.dto;

import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OrderDto extends GenericDto{

    private LocalDateTime appointmentDate;
    private LocalDate appointmentDay;
    private Integer appointmentPeriod;
    private UserDto user;

}
