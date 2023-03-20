package com.javalearning.registrationform.controller;

import com.javalearning.registrationform.dto.OrderDto;
import com.javalearning.registrationform.mapper.OrderMapper;
import com.javalearning.registrationform.model.Order;
import com.javalearning.registrationform.service.OrderService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@CrossOrigin
@RestController
@RequestMapping(value = "order")
public class OrderController extends GenericController<Order, OrderDto>{

    private final OrderService service;
    private final OrderMapper mapper;

    public OrderController(OrderService service, OrderMapper mapper) {
        super(service, mapper);
        this.service = service;
        this.mapper = mapper;
    }
}
