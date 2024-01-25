/**
 * GENERATED SOURCE - DO NOT EDIT
 */
package com.kapeta.sample.rest;

import com.kapeta.sample.dto.CreateMessageDTO;
import com.kapeta.sample.dto.MessageDTO;
import com.kapeta.sample.service.IMessagesMessagesService;
import com.kapeta.spring.annotation.*;
import jakarta.validation.Valid;
import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Description;
import org.springframework.web.bind.annotation.*;

@RestController
@KapetaController("messages")
@RequestMapping("/messages")
public class MessagesMessagesController {

    private final IMessagesMessagesService service;

    public MessagesMessagesController(IMessagesMessagesService service) {
        this.service = service;
    }

    @Description("Get all messages")
    @ResponseBody
    @RequestMapping(value = "/", method = RequestMethod.GET)
    public List<MessageDTO> getAll() throws Exception {
        return service.getAll();
    }

    @Description("Add message")
    @ResponseBody
    @RequestMapping(value = "/", method = RequestMethod.POST)
    public MessageDTO add(@Valid @RequestBody CreateMessageDTO message)
        throws Exception {
        return service.add(message);
    }

    @Description("Delete message")
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable String id) throws Exception {
        service.delete(id);
    }

    @Description("Delete all messages")
    @RequestMapping(value = "/", method = RequestMethod.DELETE)
    public void deleteAll() throws Exception {
        service.deleteAll();
    }
}
