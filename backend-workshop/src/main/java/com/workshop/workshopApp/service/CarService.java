package com.workshop.workshopApp.service;

import com.workshop.workshopApp.model.Car;
import com.workshop.workshopApp.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarService {
    private CarRepository carRepository;

    @Autowired
    public CarService(CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    public Car createCar(Car car) {
        return carRepository.save(car);
    }

    public List<Car> getCarsForUser(String id) {
        return carRepository.findByUserId(id);
    }
}
