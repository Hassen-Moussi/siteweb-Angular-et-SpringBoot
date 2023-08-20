package com.example.mezzo_rec.Entites;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.apache.catalina.LifecycleState;


import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
@Data

@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 100)
    private String username;


    private String email;
    private String password;
    private String role;
    private String token;

    private Boolean active;

    public User() {
    }
    @OneToMany(targetEntity = Offre.class,cascade = CascadeType.ALL)
    @JoinColumn(name = "cp_fk" ,referencedColumnName = "id")
    private Set<Offre> offre;


    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }


    public Set<Offre> getOffre() {
        return offre;
    }

    public void setOffre(Set<Offre> offre) {
        this.offre = offre;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", role='" + role + '\'' +
                ", token='" + token + '\'' +
                ", active=" + active +

                '}';
    }
}
