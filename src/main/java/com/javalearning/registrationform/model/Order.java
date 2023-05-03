package com.javalearning.registrationform.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "orders")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@SequenceGenerator(name = "default_generator", sequenceName = "publishing_seq", allocationSize = 1)
public class Order extends GenericModel {

    @Column(name = "appointment_date_full")
    private LocalDateTime appointmentFullDate;

    @Column(name = "appointment_day")
    private LocalDate appointmentDay;

    @Column(name = "room_id")
    private Integer roomId;

    @Column(name = "pc_id")
    private Integer pcId;
//
//    @Column(name = "userId")
//    private Long userId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", foreignKey = @ForeignKey(name = "FK_ORDERING_USER"))
    private User user;

    @Builder
    public Order(Long id, LocalDateTime appointmentFullDate, LocalDate appointmentDay, Integer roomId, Integer pcId, User user) {
        super(id);
        this.appointmentFullDate = appointmentFullDate;
        this.appointmentDay = appointmentDay;
        this.roomId = roomId;
        this.pcId = pcId;
        this.user = user;
//        this.userId = user.getId();
    }
}
