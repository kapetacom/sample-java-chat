/**
 * GENERATED SOURCE - DO NOT EDIT
 */
package com.kapeta.sample.service;

import com.kapeta.sample.dto.*;
import java.util.*;

public interface IMessagesService {
    /**
     * Get all messages
     */
    List<MessageDTO> getMessages() throws Exception;

    /**
     * Add message
     */
    MessageDTO addMessage(CreateMessageDTO message) throws Exception;

    /**
     * Delete message
     */
    void deleteMessage(String id) throws Exception;

    /**
     * Delete all messages
     */
    void deleteAllMessages() throws Exception;
}
