package com.kapeta.sample;

import com.kapeta.spring.KapetaApplication;
import com.kapeta.spring.annotation.KapetaEnableMongoDB;
import com.kapeta.spring.annotation.KapetaEnableRestResource;
import com.kapeta.spring.annotation.KapetaSpringApplication;

@KapetaSpringApplication
@KapetaEnableRestResource
@KapetaEnableMongoDB
public class SampleJavaChatMessagesServiceApplication {

    public static void main(String[] args) {
        KapetaApplication.run(
            SampleJavaChatMessagesServiceApplication.class,
            args
        );
    }
}
