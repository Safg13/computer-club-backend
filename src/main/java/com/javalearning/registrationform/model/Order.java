package com.javalearning.registrationform.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "orders")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@SequenceGenerator(name = "default_generator", sequenceName = "publishing_seq", allocationSize = 1)
public class Order extends GenericModel {
    @Column(name = "appointment_date")
    private LocalDateTime appointmentDate;
    @Column(name = "appointment_period")
    private Integer appointmentPeriod;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", foreignKey = @ForeignKey(name = "FK_ORDERING_USER"))
    private User user;

    @Builder
    public Order(Long id, LocalDateTime appointmentDate, Integer appointmentPeriod, User user) {
        super(id);
        this.appointmentDate = appointmentDate;
        this.appointmentPeriod = appointmentPeriod;
        this.user = user;
    }
}
