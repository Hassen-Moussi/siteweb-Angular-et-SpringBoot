package com.example.mezzo_rec.Services;

import java.util.List;
import com.example.mezzo_rec.Entites.Utilisateur;
import org.springframework.stereotype.Service;



@Service
public interface UtilisateurService {

	public Utilisateur createUtilisateur(Utilisateur utilisateur);

	public List<Utilisateur> getAllUtilisateurs();

	public Utilisateur findUtilisateurById(Long id);

	public void deleteUtilisateurById(Long id);

	public Utilisateur updateUtilisateur(Utilisateur utilisateur);



	public List<Utilisateur> findByEmailOrPassword(String Email, String Password);

	public Utilisateur findAllUtilisateurByPassword(String Password);

	Utilisateur login(Utilisateur utilisateur);
	public Utilisateur findUtilisateurByLastName(String LastName);
}
