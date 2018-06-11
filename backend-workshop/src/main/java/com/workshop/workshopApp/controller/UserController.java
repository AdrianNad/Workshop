package com.workshop.workshopApp.controller;

import com.workshop.workshopApp.model.Car;
import com.workshop.workshopApp.model.User;
import com.workshop.workshopApp.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Slf4j
@RestController
@RequestMapping(path = "/users")
public class UserController {

    private final UserService userService;

    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    public UserController(UserService userService, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.userService = userService;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @GetMapping("")
    public ResponseEntity<List<User>> findAllUsers() {
        List<User> users = userService.findAll();
        if (users.isEmpty()) {
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @PostMapping("/signUp")
    public User signUp(@RequestBody User user) {
        log.info("signup called");
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        return userService.save(user);
    }

    @GetMapping("/{email}")
    public User getUserInformation(@PathVariable String email) {
        return userService.findByEmail(email);
    }

    @PostMapping("/{id}/cars")
    public Car addCar(@RequestBody Car car, @PathVariable String id) {
        return userService.addCar(id, car);
    }

    @GetMapping("/{id}/cars")
    public List<Car> getCars(@PathVariable String id) {
        return userService.getCars(id);
    }
}
