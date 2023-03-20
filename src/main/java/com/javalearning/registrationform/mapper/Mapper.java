package com.javalearning.registrationform.mapper;

import com.javalearning.registrationform.dto.GenericDto;
import com.javalearning.registrationform.model.GenericModel;

public interface Mapper<E extends GenericModel, D extends GenericDto> {

    E toEntity(D dto);

    D toDto(E entity);

}

