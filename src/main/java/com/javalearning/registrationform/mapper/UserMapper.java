package com.javalearning.registrationform.mapper;

import com.javalearning.registrationform.dto.UserDto;
import com.javalearning.registrationform.model.User;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;


@Component
public class UserMapper extends GenericMapper<User, UserDto>{

    protected UserMapper(ModelMapper mapper) {
        super(mapper, User.class, UserDto.class);
    }
}
