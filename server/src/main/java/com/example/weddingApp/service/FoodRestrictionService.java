package com.example.weddingApp.service;

import java.util.List;

import com.example.weddingApp.model.FoodRestriction;
import com.example.weddingApp.repository.FoodRestrictionRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FoodRestrictionService {

    @Autowired
    private FoodRestrictionRepository foodRestrictionRepository;

    public List<FoodRestriction> getAllFoodRestrictions() {
        return foodRestrictionRepository.findAll();
    }
}
