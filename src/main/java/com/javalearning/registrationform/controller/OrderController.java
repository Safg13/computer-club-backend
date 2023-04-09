package com.javalearning.registrationform.controller;

import com.javalearning.registrationform.dto.OrderDto;
import com.javalearning.registrationform.mapper.OrderMapper;
import com.javalearning.registrationform.model.Order;
import com.javalearning.registrationform.service.OrderService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Slf4j
@CrossOrigin
@RestController
@RequestMapping(value = "order")
public class OrderController extends GenericController<Order, OrderDto> {

    private final OrderService service;
    private final OrderMapper mapper;

    public OrderController(OrderService service, OrderMapper mapper) {
        super(service, mapper);
        this.service = service;
        this.mapper = mapper;
    }

    @Operation(description = "Проверить существует ли запись на это время", method = "GetOne")
    @GetMapping("/check")
    public ResponseEntity<Object> checkAppointment(LocalDateTime appointmentDate) {
        if (service.isAppointmentExistsByDate(appointmentDate)) {
            return ResponseEntity.status(HttpStatus.OK).body("На данное время есть запись");
        }
        return ResponseEntity.status(HttpStatus.OK).body("Данное время свободно");
    }

    @Operation(description = "Создать заказ с проверкой отсутствия записи на это время", method = "Create")
    @PostMapping("/add-order")
    public ResponseEntity<Object> addAppointment(@RequestBody OrderDto orderDto) {
        if (service.isAppointmentExistsByDate(orderDto.getAppointmentFullDate())) {
            return ResponseEntity.badRequest().body("{\"response\": \"appointment exists\"}");
        }
        return ResponseEntity.status(HttpStatus.OK).body(mapper.toDto(service.addOrder(orderDto)));
    }

    @Operation(description = "Получить список всех заказов на конкретный день", method = "GetAll")
    @GetMapping("/orderslist/{date}")
    public ResponseEntity<List<OrderDto>> getOrdersByDate(@PathVariable LocalDate date) {
        return ResponseEntity.ok().body(service.findOrdersByDate(date).stream().map(mapper::toDto).toList());
    }
}
