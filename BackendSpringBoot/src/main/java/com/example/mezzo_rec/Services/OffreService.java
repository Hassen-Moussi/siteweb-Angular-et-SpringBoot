package com.example.mezzo_rec.Services;

import com.example.mezzo_rec.Entites.Offre;

import com.example.mezzo_rec.Repository.OffreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class OffreService {
    @Autowired

    private OffreRepository offreRepository;



    public Offre Addoffre (Offre offre) {
        return offreRepository.save(offre);

    }

    public List<Offre> getAllOffres() {
        return offreRepository.findAll();
    }





    public Offre updateOffre(Offre offre) {
        Optional<Offre> o = offreRepository.findById((Long) offre.getId());

        if(o.isPresent()) {
            return offreRepository.save(offre);}
        else {
            return null ;
        }
    }

    public void deleteOffreById(Long id) {
        offreRepository.deleteById(id);
    }

    public Offre findOffreById(Long id) {


        Optional<Offre> o = offreRepository.findById(id);
        if (o.isPresent()) {
            return o.get();
        } else {
            return null;
        }

    }

}
