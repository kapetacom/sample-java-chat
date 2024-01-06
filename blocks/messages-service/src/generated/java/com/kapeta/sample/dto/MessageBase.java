/**
 * GENERATED SOURCE - DO NOT EDIT
 */
package com.kapeta.sample.dto;

import jakarta.validation.constraints.NotNull;
import java.util.*;
import lombok.*;

@Data
public class MessageBase {

    @NotNull
    private String id;

    @NotNull
    private String text;

    @NotNull
    private Date createdAt;

    @NotNull
    private String authorName;
}
