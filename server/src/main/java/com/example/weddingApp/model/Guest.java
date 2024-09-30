package com.example.weddingApp.model;

import java.util.Set;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.*;

@Entity
public class Guest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonProperty("guestName")
    private String guestName;

    @JsonProperty("email")
    private String email;

    @JsonProperty("rsvp")
    @Enumerated(EnumType.STRING)
    private RSVPStatus rsvp;

    @ManyToMany
    @JoinTable(name = "guest_food_restriction", joinColumns = @JoinColumn(name = "guest_id"), inverseJoinColumns = @JoinColumn(name = "restriction_id"))
    private Set<FoodRestriction> foodRestrictions;

    @JsonProperty("unlistedAllergies")
    private String unlistedAllergies;

    @JsonProperty("autobus")
    private boolean autobus;

    @JsonProperty("sleep")
    private boolean sleep;

    @JsonProperty("music")
    private String music;

    // Getters and Setters

    // Getter and Setter for guestName
    public String getGuestName() {
        return guestName;
    }

    public void setGuestName(String guestName) {
        this.guestName = guestName;
    }

    // Getter and Setter for email
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    // Getter and Setter for rsvp
    public RSVPStatus getRSVP() {
        return rsvp;
    }

    public void setRSVP(RSVPStatus rsvp) {
        this.rsvp = rsvp;
    }

    // Getter and Setter for foodRestrictions
    public Set<FoodRestriction> getFoodRestrictions() {
        return foodRestrictions;
    }

    public void setFoodRestrictions(Set<FoodRestriction> foodRestrictions) {
        this.foodRestrictions = foodRestrictions;
    }

    public Guest() {
        // default constructor
    }

}
