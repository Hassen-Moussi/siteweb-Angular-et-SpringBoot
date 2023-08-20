package com.example.mezzo_rec.Entites;


import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Offre {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String titre;
    private String description;
    private Date datexp;
    private String adresse;






    public Offre() {
    }

    public Offre(Long id, String titre, String description, Date datexp, String adresse, User user) {
        this.id = id;
        this.titre = titre;
        this.description = description;
        this.datexp = datexp;
        this.adresse = adresse;
        this.user = user;
    }

    @ManyToOne
    @JsonBackReference
    private User user;
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getDatexp() {
        return datexp;
    }

    public void setDatexp(Date datexp) {
        this.datexp = datexp;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }


    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }




    @Override
    public String toString() {
        return "Offre{" +
                "id=" + id +
                ", titre='" + titre + '\'' +
                ", description='" + description + '\'' +
                ", datexp=" + datexp +
                ", adresse='" + adresse + '\'' +
                ", user=" + user +
                '}';
    }
}
