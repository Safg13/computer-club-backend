package com.javalearning.registrationform.controller;

import com.javalearning.registrationform.dto.OrderDto;
import com.javalearning.registrationform.mapper.OrderMapper;
import com.javalearning.registrationform.model.Order;
import com.javalearning.registrationform.service.OrderService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
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

    @Operation(description = "Создать заказ с проверкой отсутствия записи на это время", method = "Create")
    @SecurityRequirement(name = "Bearer Authentication")
    @PostMapping("/add-order")
    public ResponseEntity<Object> addAppointment(@RequestBody OrderDto orderDto) {
        if (service.isAppointmentExists(orderDto.getAppointmentFullDate(), orderDto.getRoomId(), orderDto.getPcId())) {
            return ResponseEntity.badRequest().body("{\"response\": \"appointment exists\"}");
        }
        return ResponseEntity.status(HttpStatus.OK).body(mapper.toDto(service.addOrder(orderDto)));
    }

    @Operation(description = "Получить список всех заказов на конкретный день, комнату и время", method = "GetAll")
    @GetMapping("/orderslistbydate/{date}/{roomId}/{appointmentFullDate}")
    public ResponseEntity<List<OrderDto>> getOrdersByDateAndRoom(@PathVariable LocalDate date, @PathVariable Integer roomId, @PathVariable LocalDateTime appointmentFullDate) {
        return ResponseEntity.ok().body(service.findOrdersByDateAndRoomIdAndTime(date, roomId, appointmentFullDate).stream().map(mapper::toDto).toList());
    }

    @Operation(description = "Получить список всех заказов пользователя", method = "GetAll")
    @GetMapping("/orderslistbyuserid/{userId}")
    public ResponseEntity<List<OrderDto>> getOrdersByUser(@PathVariable Long userId) {
        return ResponseEntity.ok().body(service.findOrdersByEmail(userId).stream().map(mapper::toDto).toList());
    }
}
