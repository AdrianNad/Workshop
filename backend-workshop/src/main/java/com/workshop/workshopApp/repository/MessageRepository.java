package com.workshop.workshopApp.repository;

import com.workshop.workshopApp.model.Message;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MessageRepository extends MongoRepository<Message, String>{
    List<Message> findAllByReceiverRoleOrReceiverEmail(String role, String email);
}
