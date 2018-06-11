package com.workshop.workshopApp.repository;

import com.workshop.workshopApp.model.Car;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CarRepository extends MongoRepository<Car, String>{
    List<Car> findByUserId(String id);
}
