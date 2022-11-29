package com.example.restapi.Backend.Minion.Domain;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;

@AllArgsConstructor
@Service
public class MinionService {

    private final MinionRepository minionrepository;

    public List<Minion> getAllMinions() {
        return minionrepository.findAll();
    }

    public void inserMinion(Minion minion) {
        minionrepository.save(minion);
    }

    public Optional<Minion> getById(int id) {
        Optional<Minion> minion = minionrepository.findById(id);
        return minion;
    }

    public void updateMinion(Minion minion) {
        minionrepository.save(minion);
    }
}
