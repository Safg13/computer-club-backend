package com.javalearning.registrationform.repository;

import com.javalearning.registrationform.model.Order;
import org.springframework.cglib.core.Local;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface
OrderRepository extends GenericRepository<Order> {

    List<Order> findAllByUserId(String userId);
    List<Order> findAllByAppointmentDay(LocalDate appointmentDate);

    //Order findOrderByAppointmentDate(LocalDateTime appointmentDate);

    boolean existsByAppointmentFullDate(LocalDateTime appointmentFullDate);

}
