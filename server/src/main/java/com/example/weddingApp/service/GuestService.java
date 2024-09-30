package com.example.weddingApp.service;

import com.example.weddingApp.model.Guest;
import com.example.weddingApp.repository.GuestRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Map;
import java.util.HashMap;

import java.util.Optional;

@Service
public class GuestService {

    private final int MAX_ATTEMPTS = 5;
    private final Map<String, Integer> attemptsCache = new HashMap<>();

    @Autowired
    private GuestRepository guestRepository;

    public Optional<Guest> findGuestByNameAndEmail(String name, String email) {
        String cacheKey = name + ":" + email;

        // Check if this user has exceeded the allowed attempts
        if (attemptsCache.getOrDefault(cacheKey, 0) >= MAX_ATTEMPTS) {
            throw new RuntimeException("This account has been temporarily locked due to multiple failed attempts.");
        }

        Optional<Guest> guest = guestRepository.findByGuestNameAndEmail(name, email);

        if (guest.isPresent()) {
            attemptsCache.put(cacheKey, 0); // Reset attempts on success
            return guest;
        } else {
            attemptsCache.put(cacheKey, attemptsCache.getOrDefault(cacheKey, 0) + 1); // Increment attempts on failure
            return Optional.empty();
        }
    }

    // Get a guest by ID (Read from DB)
    public Optional<Guest> getGuestById(Long id) {
        return guestRepository.findById(id);
    }

    // Update a guest (Write to DB)
    public Guest updateGuest(Guest guest) {
        return guestRepository.save(guest);
    }

}
