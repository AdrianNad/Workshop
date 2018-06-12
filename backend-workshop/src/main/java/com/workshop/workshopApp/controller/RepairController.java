package com.workshop.workshopApp.controller;

import com.workshop.workshopApp.model.Repair;
import com.workshop.workshopApp.service.RepairService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/repairs")
public class RepairController {

    private RepairService repairService;

    @Autowired
    public RepairController(RepairService repairService) {
        this.repairService = repairService;
    }

    @PostMapping
    private Repair createRepair(@RequestBody Repair repair) {
        return repairService.createRepair(repair);
    }

    @GetMapping("/status/{status}")
    private List<Repair> getRepairs(@PathVariable String status) {
        return repairService.getRepairsByStatus(status);
    }

    @GetMapping("/user/{email}")
    private List<Repair> getRepairsForUser(@PathVariable String email) {
        return repairService.getRepairsForUser(email);
    }

    @PutMapping
    private Repair updateRepair(@RequestBody Repair repair){
        return repairService.updateRepair(repair);
    }
}
