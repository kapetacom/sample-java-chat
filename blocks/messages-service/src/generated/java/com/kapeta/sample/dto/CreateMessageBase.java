/**
 * GENERATED SOURCE - DO NOT EDIT
 */
package com.kapeta.sample.dto;

import jakarta.validation.constraints.NotNull;
import java.util.*;
import lombok.*;

@Data
public class CreateMessageBase {

    @NotNull
    private String text;

    @NotNull
    private String authorName;
}
