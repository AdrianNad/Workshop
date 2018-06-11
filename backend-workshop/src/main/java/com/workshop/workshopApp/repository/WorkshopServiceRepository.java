package com.workshop.workshopApp.repository;

import com.workshop.workshopApp.model.WorkshopService;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WorkshopServiceRepository extends MongoRepository<WorkshopService, String>{
}
