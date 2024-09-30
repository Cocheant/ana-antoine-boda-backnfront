package com.example.weddingApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.weddingApp.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
