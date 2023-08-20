package com.example.mezzo_rec.Services;

import com.example.mezzo_rec.Entites.Candidature;
import com.example.mezzo_rec.Repository.CandidatureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CandidatureService {


    @Autowired
    private CandidatureRepository candidatureRepository;

    public Candidature Addcandidature (Candidature candidature) {

        return candidatureRepository.save(candidature);

    }

    public List<Candidature> getAllCandidatures() {
        return candidatureRepository.findAll();
    }

    public Candidature updateCandidature(Candidature candidature) {
        Optional<Candidature> c = candidatureRepository.findById((Long) candidature.getId());

        if(c.isPresent()) {
            return candidatureRepository.save(candidature);}
        else {
            return null ;
        }
    }

    public void deleteCandidatureById(Long id) {
        candidatureRepository.deleteById(id);
    }
}
