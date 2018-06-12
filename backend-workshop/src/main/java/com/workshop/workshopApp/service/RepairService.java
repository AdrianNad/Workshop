package com.workshop.workshopApp.service;

import com.workshop.workshopApp.model.Repair;
import com.workshop.workshopApp.repository.RepairRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RepairService {

    private RepairRepository repairRepository;

    @Autowired
    public RepairService(RepairRepository repairRepository) {
        this.repairRepository = repairRepository;
    }

    public Repair createRepair(Repair repair) {
        return repairRepository.save(repair);
    }

    public List<Repair> getRepairsByStatus(String status) {
        return repairRepository.findByStatusOrderByDate(status);
    }

    public Repair updateRepair(Repair repair) {
        return repairRepository.save(repair);
    }

    public List<Repair> getRepairsForUser(String email) {
        return repairRepository.findByUserEmailOrderByDateDesc(email);
    }
}
