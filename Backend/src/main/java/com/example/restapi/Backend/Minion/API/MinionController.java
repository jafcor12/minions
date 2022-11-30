package com.example.restapi.Backend.Minion.API;

import java.util.*;
import com.example.restapi.Backend.Minion.Domain.Minion;
import com.example.restapi.Backend.Minion.Domain.MinionService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("api/")
@AllArgsConstructor
public class MinionController {
    private final MinionService minionService;

    @GetMapping("/list")
    public List<Minion> fetchMinions() {
        return minionService.getAllMinions();
    }

    @PostMapping("/insert")
    public String addMinion(@RequestBody Minion minion) {
        Optional<Minion> existingMinion = minionService.getById(minion.getID());
        if (existingMinion.isPresent()) return "Minion already exists";
        minionService.inserMinion(minion);
        return "Minion inserted";
    }

    @PutMapping("/update")
    public String updateMinion(@RequestBody Minion minion) {
        Optional<Minion> existingMinion = minionService.getById(minion.getID());
        if (!existingMinion.isPresent()) return "This minion does not exists";
        minionService.updateMinion(minion);
        return "Minion updated";
    }

    @DeleteMapping("/delete/{id}")
    public String deleteMinion(@PathVariable("id") int id) {
        Optional<Minion> existingMinion = minionService.getById(id);
        if (!existingMinion.isPresent()) return "This minion does not exists";
        minionService.deleteMinion(id);
        return "Minion deleted";
    }
}
