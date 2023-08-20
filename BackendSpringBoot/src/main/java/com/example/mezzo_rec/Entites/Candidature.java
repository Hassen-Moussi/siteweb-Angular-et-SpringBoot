package com.example.mezzo_rec.Entites;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Candidature  {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String firstname;
    private String lastname;
    private String experience;
    private String email ;
    private int telnum;
    private String cv;

    public Candidature(long id, String firstname, String lastname, String experience, String email, int telnum, String cv) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.experience = experience;
        this.email = email;
        this.telnum = telnum;
        this.cv = cv;
    }
    public Candidature(){}

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getExperience() {
        return experience;
    }

    public void setExperience(String experience) {
        this.experience = experience;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getTelnum() {
        return telnum;
    }

    public void setTelnum(int telnum) {
        this.telnum = telnum;
    }

    public String getCv() {
        return cv;
    }

    public void setCv(String cv) {
        this.cv = cv;
    }

    @Override
    public String toString() {
        return "Candidature{" +
                "id=" + id +
                ", firstname='" + firstname + '\'' +
                ", lastname='" + lastname + '\'' +
                ", experience=" + experience +
                ", email='" + email + '\'' +
                ", telnum=" + telnum +
                ", cv='" + cv + '\'' +
                '}';
    }
}
