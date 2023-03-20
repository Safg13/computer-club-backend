package com.javalearning.registrationform.mapper;

import com.javalearning.registrationform.dto.OrderDto;
import com.javalearning.registrationform.model.Order;
import com.javalearning.registrationform.repository.OrderRepository;
import com.javalearning.registrationform.repository.UserRepository;
import jakarta.annotation.PostConstruct;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
public class OrderMapper extends GenericMapper<Order, OrderDto> {

    private final OrderRepository orderRepository;
    private final UserRepository userRepository;


    protected OrderMapper(ModelMapper mapper, OrderRepository orderRepository, UserRepository userRepository) {
        super(mapper, Order.class, OrderDto.class);
        this.orderRepository = orderRepository;
        this.userRepository = userRepository;
    }

    @PostConstruct
    public void setupMapper() {
        super.mapper.createTypeMap(Order.class, OrderDto.class)
                .addMappings(m -> m.skip(OrderDto::setUserId)).setPostConverter(toDtoConverter());
    }

}
