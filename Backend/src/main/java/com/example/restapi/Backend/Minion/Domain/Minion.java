package com.example.restapi.Backend.Minion.Domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@Document(collection = "Minion")
public class Minion {
    @Id
    int ID;
    String NAME;
    int SALARY;
    String WEAKNESS;
}
