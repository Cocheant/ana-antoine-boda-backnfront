package com.example.weddingApp.clr;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.example.weddingApp.service.UserService;

@Component
public class UserCommandLineRunner implements CommandLineRunner {

    @Autowired
    private UserService userService;

    @Override
    public void run(String... args) throws Exception {
        // Example of creating a user manually
        // userService.createUser("username", "password"); // Replace with a secure
        // password, requires insert privilege from mysql console.
        // System.out.println("Admin user created with username: (entered username in
        // previous line)");
    }
}
