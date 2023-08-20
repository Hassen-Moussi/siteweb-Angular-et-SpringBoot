package com.example.mezzo_rec.Controllers;

import java.util.List;


import com.example.mezzo_rec.Entites.Utilisateur;
import com.example.mezzo_rec.Services.UtilisateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@CrossOrigin
@RestController
@RequestMapping("/Utilisateur")
public class UtilisateurController {
	@Autowired
	private UtilisateurService utilisateurservice;

	@GetMapping(path ="/AllUtilisateurs")
	public List<Utilisateur> getAllUtilisateurs() {
		return utilisateurservice.getAllUtilisateurs();
	}
	
	
	
	@GetMapping (path="/findBypassword/{Password}")//localhost:8080/Users/findById
	public Utilisateur findAllUtilisateurByPassword(@PathVariable String Password)
	{
		return utilisateurservice.findAllUtilisateurByPassword(Password);
	}

	
	
	
	

	@PutMapping(path ="/UpdateUtilisateur")
	public Utilisateur UpdateUtilisateurs(@RequestBody Utilisateur utilisateur) {
		return utilisateurservice.updateUtilisateur(utilisateur);
	}

	@PostMapping(path ="/createutilisateur")
	public Utilisateur CreateUtilisateurs(@RequestBody Utilisateur utilisateur) {
		return utilisateurservice.createUtilisateur(utilisateur);

	}
	

	@DeleteMapping(path ="/{id}")
	public void DeleteUtilisateurs(@PathVariable Long id) {
		utilisateurservice.deleteUtilisateurById(id);
	}

	@GetMapping(path ="/FindById/{id}")
	public Utilisateur findById(@PathVariable Long id) {
		return utilisateurservice.findUtilisateurById(id);

	}
	@GetMapping(path = "/{Email}/{Password}")
	public List<Utilisateur> findByEmailAndPassword(@PathVariable String Email, String Password) {
		return utilisateurservice.findByEmailOrPassword( Email, Password);
	}

	@PostMapping("/login")
	public Utilisateur login(@RequestBody Utilisateur utilisateur) {

		return utilisateurservice.login(utilisateur);
	}

	@GetMapping(path = "/findbylastname/{LastName}")
	public Utilisateur findByLastName(@PathVariable String LastName) {
		return utilisateurservice.findUtilisateurByLastName(LastName);
	}

}
