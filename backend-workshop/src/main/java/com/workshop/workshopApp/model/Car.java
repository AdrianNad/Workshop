package com.workshop.workshopApp.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document
public class Car {
    @Id
    private String id;

    @Indexed(unique = true)
    private String licensePlate;
    private String brand;
    private int year;
    private String userId;
}
