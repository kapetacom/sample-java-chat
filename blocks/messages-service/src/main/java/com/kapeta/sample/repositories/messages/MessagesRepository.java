package com.kapeta.sample.repositories.messages;

import com.kapeta.spring.mongo.repository.BaseMongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MessagesRepository extends BaseMongoRepository<MessageEntry, String> {

}
