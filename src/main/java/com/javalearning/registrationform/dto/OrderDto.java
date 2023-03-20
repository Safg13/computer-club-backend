package com.javalearning.registrationform.dto;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OrderDto extends GenericDto{

    private LocalDateTime rentDate;
    private Integer rentPeriod;
    private Long userId;
    private UserDto user;

}
