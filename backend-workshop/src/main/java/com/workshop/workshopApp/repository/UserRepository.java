package com.workshop.workshopApp.repository;

import com.workshop.workshopApp.model.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UserRepository extends CrudRepository<User, Long> {
    List<User> findAll();
    User findByName(String name);
    User findByEmail(String email);
}

