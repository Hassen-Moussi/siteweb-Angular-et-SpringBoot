package com.example.mezzo_rec.Controllers;


import com.example.mezzo_rec.Entites.Candidature;

import com.example.mezzo_rec.Services.CandidatureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Candidature")
@CrossOrigin(origins = "http://localhost:4200")
public class CandidatureController {

    @Autowired
    private CandidatureService candidatureService;


    @PostMapping("/Addcandidature")
    public Candidature addcandidature(@RequestBody Candidature candidature) {

        return  candidatureService.Addcandidature(candidature);
    }
    @GetMapping(path="/Allcandidatures")
    public List<Candidature> getAllCandidatures(){
        return candidatureService.getAllCandidatures();
    }
    @PutMapping(path = "/updatecandidature")
    public Candidature updatecandidature(@RequestBody Candidature candidature) {
        return candidatureService.updateCandidature(candidature);
    }
    @DeleteMapping(path ="deletecandidature/{id}")
    public void DeleteCandidature(@PathVariable Long id) {
        candidatureService.deleteCandidatureById(id);
    }
}
