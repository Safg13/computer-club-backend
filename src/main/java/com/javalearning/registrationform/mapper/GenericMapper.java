package com.javalearning.registrationform.mapper;


import com.javalearning.registrationform.dto.GenericDto;
import com.javalearning.registrationform.model.GenericModel;
import org.modelmapper.Converter;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import java.util.Objects;

@Component
public abstract class GenericMapper<E extends GenericModel, D extends GenericDto> implements Mapper<E, D> {
    protected final ModelMapper mapper;
    private final Class<E> entityClass;
    private final Class<D> dtoClass;

    protected GenericMapper(ModelMapper mapper, Class<E> entityClass, Class<D> dtoClass) {
        this.mapper = mapper;
        this.entityClass = entityClass;
        this.dtoClass = dtoClass;
    }

    @Override
    public E toEntity(D dto) {
        return Objects.isNull(dto)
                ? null
                : mapper.map(dto, entityClass);
    }

    @Override
    public D toDto(E entity) {
        return Objects.isNull(entity)
                ? null
                : mapper.map(entity, dtoClass);
    }

    Converter<D, E> toEntityConverter() {
        return context -> {
            D source = context.getSource();
            E destination = context.getDestination();
            mapSpecificFields(source, destination);
            return context.getDestination();
        };
    }

    Converter<E, D> toDtoConverter() {
        return context -> {
            E source = context.getSource();
            D destination = context.getDestination();
            mapSpecificFields(source, destination);
            return context.getDestination();
        };
    }

    void mapSpecificFields(D source, E destination) {

    }

    void mapSpecificFields(E source, D destination) {

    }


}
