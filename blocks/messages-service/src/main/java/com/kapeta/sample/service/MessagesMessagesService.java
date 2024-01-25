package com.kapeta.sample.service;

import com.kapeta.sample.dto.CreateMessageDTO;
import com.kapeta.sample.dto.MessageDTO;
import java.util.*;

import com.kapeta.sample.repositories.messages.MessageEntry;
import com.kapeta.sample.repositories.messages.MessagesRepository;
import org.springframework.stereotype.Service;

@Service
public class MessagesMessagesService implements IMessagesMessagesService {

    private final MessagesRepository messagesRepository;

    public MessagesMessagesService(MessagesRepository messagesRepository) {
        this.messagesRepository = messagesRepository;
    }

    /**
     * Get all messages
     */
    @Override
    public List<MessageDTO> getAll() {
        return messagesRepository.findAll().stream().map(MessageEntry::toDTO).toList();
    }

    /**
     * Add message
     */
    @Override
    public MessageDTO add(CreateMessageDTO message) {
        var data = new MessageEntry();
        data.setText(message.getText());
        data.setAuthorName(message.getAuthorName());

        return messagesRepository.insert(data).toDTO();
    }

    /**
     * Delete message
     */
    @Override
    public void delete(String id) {
        messagesRepository.deleteById(id);
    }

    /**
     * Delete all messages
     */
    @Override
    public void deleteAll() {
        messagesRepository.deleteAll();
    }
}
