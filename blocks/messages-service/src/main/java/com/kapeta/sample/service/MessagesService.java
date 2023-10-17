package com.kapeta.sample.service;

import com.kapeta.sample.gen.service.IMessagesService;
import com.kapeta.sample.dto.*;

import java.util.*;

import com.kapeta.sample.repositories.messages.MessageEntry;
import com.kapeta.sample.repositories.messages.MessagesRepository;
import org.springframework.stereotype.Service;

@Service
public class MessagesService implements IMessagesService {

    private final MessagesRepository messagesRepository;

    public MessagesService(MessagesRepository messagesRepository) {
        this.messagesRepository = messagesRepository;
    }

    /**
     * Get all messages
     */
    @Override
    public List<MessageDTO> getMessages() {
        return messagesRepository.findAll().stream().map(MessageEntry::toDTO).toList();
    }


    /**
     * Add message
     */
    @Override
    public MessageDTO addMessage(CreateMessageDTO message) {

        var data = new MessageEntry();
        data.setText(message.getText());
        data.setAuthorName(message.getAuthorName());

        return messagesRepository.insert(data).toDTO();
    }


    /**
     * Delete message
     */
    @Override
    public void deleteMessage(String id) {
        messagesRepository.deleteById(id);
    }


    /**
     * Delete all messages
     */
    @Override
    public void deleteAllMessages() {
        messagesRepository.deleteAll();
    }


}
