/**
 * GENERATED SOURCE - DO NOT EDIT
 */
package com.kapeta.sample.rest;

import com.kapeta.sample.dto.*;
import com.kapeta.sample.service.IMessagesService;
import com.kapeta.spring.annotation.*;
import jakarta.validation.Valid;
import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@KapetaController("messages")
public class MessagesController {

    private final IMessagesService service;

    @Autowired
    public MessagesController(IMessagesService service) {
        this.service = service;
    }

    /**
     * Get all messages
     */
    @ResponseBody
    @RequestMapping(value = "/messages", method = RequestMethod.GET)
    public List<MessageDTO> getMessages() throws Exception {
        return service.getMessages();
    }

    /**
     * Add message
     */
    @ResponseBody
    @RequestMapping(value = "/messages", method = RequestMethod.POST)
    public MessageDTO addMessage(@Valid @RequestBody CreateMessageDTO message)
        throws Exception {
        return service.addMessage(message);
    }

    /**
     * Delete message
     */

    @RequestMapping(value = "/messages/{id}", method = RequestMethod.DELETE)
    public void deleteMessage(@PathVariable("id") String id) throws Exception {
        service.deleteMessage(id);
    }

    /**
     * Delete all messages
     */

    @RequestMapping(value = "/messages", method = RequestMethod.DELETE)
    public void deleteAllMessages() throws Exception {
        service.deleteAllMessages();
    }
}
