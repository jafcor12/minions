package com.example.restapi.Backend.Minion.Domain;

import org.springframework.data.mongodb.repository.MongoRepository;
public interface MinionRepository
        extends MongoRepository<Minion, Integer> {
}
