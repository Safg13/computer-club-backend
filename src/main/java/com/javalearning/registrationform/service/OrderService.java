package com.javalearning.registrationform.service;

import com.javalearning.registrationform.model.Order;
import com.javalearning.registrationform.repository.OrderRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class OrderService extends GenericService<Order> {

    private final OrderRepository repository;

    protected OrderService(OrderRepository repository) {
        super(repository);
        this.repository = repository;
    }

    public boolean isAppointmentExistsByDate(LocalDateTime appointmentDate) {
        return repository.existsByAppointmentDate(appointmentDate);
    }



}
