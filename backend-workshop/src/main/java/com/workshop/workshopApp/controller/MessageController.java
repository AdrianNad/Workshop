package com.workshop.workshopApp.controller;

import com.workshop.workshopApp.model.Message;
import com.workshop.workshopApp.service.MessageService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/messages")
public class MessageController {
    private MessageService messageService;

    @Autowired
    public MessageController(MessageService messageService) {
        this.messageService = messageService;
    }

    @PostMapping
    public Message createMessage(@RequestBody Message message) {
        return messageService.createMessage(message);
    }

    @GetMapping
    public List<Message> getNotRespondedMessagesForRoleOrUserEmail(@RequestParam String role, @RequestParam String email) {
        return messageService.getNotRespondedMessagesForRoleOrUserEmail(role, email);
    }

    @GetMapping("/read/{id}")
    public Message markMessageAsRead(@PathVariable String id) {
        return messageService.setMessageAsRead(id);
    }
}
