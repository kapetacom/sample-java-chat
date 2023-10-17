/**
 * GENERATED SOURCE - DO NOT EDIT
 */
package com.kapeta.sample.repositories.messages;

import com.kapeta.spring.mongo.AbstractMongoDBConfig;
import com.kapeta.spring.mongo.repository.BaseMongoRepositoryImpl;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@Configuration
@EnableMongoRepositories(
    repositoryBaseClass = BaseMongoRepositoryImpl.class,
    basePackages = { "com.kapeta.sample.repositories.messages" }
)
public class MessagesConfig extends AbstractMongoDBConfig {

    public MessagesConfig() {
        super("messages");
    }
}
