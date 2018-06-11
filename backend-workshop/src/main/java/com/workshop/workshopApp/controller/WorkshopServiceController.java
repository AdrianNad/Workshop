package com.workshop.workshopApp.controller;

import com.workshop.workshopApp.model.WorkshopService;
import com.workshop.workshopApp.service.WorkshopServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/services")
public class WorkshopServiceController {

    private WorkshopServiceService workshopServiceService;

    @Autowired
    public WorkshopServiceController(WorkshopServiceService workshopServiceService) {
        this.workshopServiceService = workshopServiceService;
    }

    @PostMapping
    private WorkshopService createService(@RequestBody WorkshopService workshopService) {
        return workshopServiceService.createService(workshopService);
    }

    @GetMapping
    private List<WorkshopService> getWorkshopService() {
        return workshopServiceService.getWorkshopServices();
    }

    @DeleteMapping("/{id}")
    private void deleteWorkshopService(@PathVariable String id) {
        workshopServiceService.deleteWorkshopService(id);
    }
}
