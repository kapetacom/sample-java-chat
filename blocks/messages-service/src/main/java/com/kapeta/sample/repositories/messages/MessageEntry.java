package com.kapeta.sample.repositories.messages;

import com.kapeta.sample.dto.MessageDTO;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
@Data
@Document(collection = "messages")
public class MessageEntry {
    @Id
    private String id;

    @CreatedDate
    private Date createdAt;

    private String text;

    private String authorName;

    public static MessageEntry fromDTO(MessageDTO message) {
        var entry = new MessageEntry();
        entry.setText(message.getText());
        entry.setAuthorName(message.getAuthorName());
        entry.setId(message.getId());
        entry.setCreatedAt(message.getCreatedAt());
        return entry;
    }

    public MessageDTO toDTO() {
        var dto = new MessageDTO();
        dto.setText(this.getText());
        dto.setAuthorName(this.getAuthorName());
        dto.setId(this.getId());
        dto.setCreatedAt(this.getCreatedAt());
        return dto;
    }
}
