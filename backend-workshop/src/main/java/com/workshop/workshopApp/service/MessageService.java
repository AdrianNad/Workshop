package com.workshop.workshopApp.service;

import com.workshop.workshopApp.model.Message;
import com.workshop.workshopApp.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class MessageService {

    private MessageRepository messageRepository;

    @Autowired
    public MessageService(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }

    public Message createMessage(Message message) {
        return messageRepository.save(message);
    }

    public List<Message> getNotRespondedMessagesForRoleOrUserEmail(String role, String email) {
        return messageRepository.findAllByReceiverRoleOrReceiverEmail(
                role, email).stream().filter(x -> !x.isResponded()).collect(Collectors.toList());
    }

    public Message setMessageAsRead(String id) {
        Message message = messageRepository.findById(id).orElseThrow(() -> new IllegalStateException("No such message"));
        message.setResponded(true);
        return messageRepository.save(message);
    }
}
