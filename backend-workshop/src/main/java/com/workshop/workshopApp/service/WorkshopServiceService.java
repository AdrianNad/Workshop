package com.workshop.workshopApp.service;

import com.workshop.workshopApp.model.WorkshopService;
import com.workshop.workshopApp.repository.WorkshopServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WorkshopServiceService {

    private WorkshopServiceRepository workshopServiceRepository;

    @Autowired
    public WorkshopServiceService(WorkshopServiceRepository workshopServiceRepository) {
        this.workshopServiceRepository = workshopServiceRepository;
    }

    public WorkshopService createService(WorkshopService workshopService) {
        return workshopServiceRepository.save(workshopService);
    }

    public List<WorkshopService> getWorkshopServices() {
        return workshopServiceRepository.findAll();
    }

    public void deleteWorkshopService(String id) {
        workshopServiceRepository.deleteById(id);
    }
}
