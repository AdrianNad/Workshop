package com.workshop.workshopApp.repository;

import com.workshop.workshopApp.model.Repair;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RepairRepository extends MongoRepository<Repair, String> {
    List<Repair> findByStatusOrderByDate(String status);

    List<Repair> findByUserEmail(String email);
}
