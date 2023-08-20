package com.example.mezzo_rec.Controllers;


import com.example.mezzo_rec.Entites.Offre;
import com.example.mezzo_rec.Services.OffreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/Offre")
@CrossOrigin(origins = "http://localhost:4200")
public class OffreController {

    @Autowired
    private OffreService offreService;


    @PostMapping("/Addoffre")
    public Offre addoffre(@RequestBody Offre offre) {

        return  offreService.Addoffre(offre);
    }

    @GetMapping(path="Alloffres")
    public List<Offre> getAllOffres(){
        return offreService.getAllOffres();
    }




    @PutMapping(path = "/updateoffre")
    public Offre updateOffre(@RequestBody Offre offre) {
        return offreService.updateOffre(offre);
    }
    @DeleteMapping(path ="deleteoffre/{id}")
    public void DeleteOffre(@PathVariable Long id) {
        offreService.deleteOffreById(id);
    }
    @GetMapping(path ="/FindOffreById/{id}")
    public Offre findById(@PathVariable Long id) {
        return offreService.findOffreById(id);

    }
}
