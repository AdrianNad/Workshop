package com.workshop.workshopApp.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document
public class Repair {
    @Id
    private String id;
    private String userEmail;
    private List<WorkshopService> workshopServices;
    private Date date;
    private String status;
    private String licensePlate;
    private int price;
    private boolean doesCustomerKnow;
}
