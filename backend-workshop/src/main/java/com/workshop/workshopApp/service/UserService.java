package com.workshop.workshopApp.service;

import com.workshop.workshopApp.model.Car;
import com.workshop.workshopApp.model.User;
import com.workshop.workshopApp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private UserRepository userRepository;

    private CarService carService;
    @Autowired
    public UserService(UserRepository userRepository, CarService carService) {
        this.userRepository = userRepository;
        this.carService = carService;
    }

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public User save(User user) {
        return userRepository.save(user);
    }

    public User findByName(String name) {
        return userRepository.findByFirstname(name);
    }

    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public Car addCar(String userId, Car car) {
        User user = userRepository.findById(userId).orElseThrow(() -> new IllegalStateException("no such user"));
        car.setUserId(userId);
        return carService.createCar(car);
    }

    public List<Car> getCars(String id) {
        return carService.getCarsForUser(id);
    }
}
