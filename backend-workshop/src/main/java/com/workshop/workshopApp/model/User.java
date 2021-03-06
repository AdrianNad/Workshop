package com.workshop.workshopApp.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
@NoArgsConstructor
public class User {

    @Id
    private String id;

    private String firstname;

    private String password;

    private String email;

    private String surname;

    private String phone;

    private String role;
}
