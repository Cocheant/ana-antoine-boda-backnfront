package com.example.weddingApp.repository;

import com.example.weddingApp.model.FoodRestriction;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FoodRestrictionRepository extends JpaRepository<FoodRestriction, Long> {
}
