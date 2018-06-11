package com.workshop.workshopApp.repository;

import com.workshop.workshopApp.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
    List<User> findAll();
    User findByFirstname(String name);
    User findByEmail(String email);
}

