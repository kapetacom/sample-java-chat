package com.kapeta.sample.service;

import com.kapeta.sample.dto.CreateMessageDTO;
import com.kapeta.sample.dto.MessageDTO;
import java.util.*;

public interface IMessagesMessagesService {
    /**
     * Get all messages
     */
    List<MessageDTO> getAll() throws Exception;

    /**
     * Add message
     */
    MessageDTO add(CreateMessageDTO message) throws Exception;

    /**
     * Delete message
     */
    void delete(String id) throws Exception;

    /**
     * Delete all messages
     */
    void deleteAll() throws Exception;
}
