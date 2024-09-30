package com.example.weddingApp.repository;

import com.example.weddingApp.model.Guest;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GuestRepository extends JpaRepository<Guest, Long> {
    Optional<Guest> findByGuestNameAndEmail(String guestName, String email);

}
