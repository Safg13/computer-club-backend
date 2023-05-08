package com.javalearning.registrationform.service;

import com.javalearning.registrationform.dto.OrderDto;
import com.javalearning.registrationform.model.Order;
import com.javalearning.registrationform.model.User;
import com.javalearning.registrationform.repository.OrderRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class OrderService extends GenericService<Order> {

    private final UserService userService;

    private final OrderRepository repository;

    protected OrderService(UserService userService, OrderRepository repository) {
        super(repository);
        this.userService = userService;
        this.repository = repository;
    }

    public boolean isAppointmentExists(LocalDateTime appointmentDate, Integer roomId, Integer pcId) {
        LocalDateTime trimmedDate = appointmentDate.withMinute(0).withSecond(0).withNano(0);

        return repository.existsByAppointmentFullDateAndRoomIdAndPcId(trimmedDate, roomId, pcId);
    }

    public Order addOrder(OrderDto orderDto) {
        User user  = userService.getOne(orderDto.getUser().getId());

        Order order = Order.builder()
                .id(0L)
                .appointmentFullDate(orderDto.getAppointmentFullDate().withMinute(0).withSecond(0).withNano(0))
                .appointmentDay(orderDto.getAppointmentFullDate().toLocalDate())
                .roomId(orderDto.getRoomId())
                .pcId(orderDto.getPcId())
                .user(user)
                .build();
        return repository.save(order);
    }

    public List<Order> findOrdersByDate(LocalDate date) {
        return repository.findAllByAppointmentDay(date);
    }

    public List<Order> findOrdersByDateAndRoomIdAndTime(LocalDate date, Integer roomId, LocalDateTime appointmentFullDate) {
        return repository.findAllByAppointmentDayAndRoomIdAndAppointmentFullDate(date, roomId, appointmentFullDate);
    }

    public List<Order> findOrdersByEmail(Long userId) {
        return repository.findAllByUserId(userId);
    }
}
