package com.example.mezzo_rec.Services;

import java.util.List;
import java.util.Optional;

import com.example.mezzo_rec.Entites.User;
import com.example.mezzo_rec.Entites.Utilisateur;
import com.example.mezzo_rec.Repository.UtilisateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class UtilisateurServiceImpl implements UtilisateurService {

	@Autowired
	private UtilisateurRepository utilisateurRepo;

	@Override
	public Utilisateur createUtilisateur(Utilisateur utilisateur) {

		return utilisateurRepo.save(utilisateur);
	}
	
	

	@Override
	public Utilisateur findUtilisateurById(Long id) {
		Optional<Utilisateur> u = utilisateurRepo.findById(id);
		if (u.isPresent()) {
			return u.get();
		} else {
			return null;
		}

	}

	@Override
	public List<Utilisateur> getAllUtilisateurs() {

		return utilisateurRepo.findAll();
	}

	@Override
	public void deleteUtilisateurById(Long id) {
		utilisateurRepo.deleteById(id);

	}
                                                                                                                                                                                                 
	@Override
	public Utilisateur updateUtilisateur(Utilisateur utilisateur) {
		Optional<Utilisateur> u = utilisateurRepo.findById((long) utilisateur.getId());
		if (u.isPresent()) {
			return utilisateurRepo.save(utilisateur);
		} else {
			return null;
		}

	}

	@Override
	public List<Utilisateur> findByEmailOrPassword(String Email, String Password) {
		return utilisateurRepo.findByEmailOrPassword(Email,Password);
		
	}



	@Override
	public Utilisateur findAllUtilisateurByPassword(String Password) {
		Optional<Utilisateur> u = utilisateurRepo.findByPassword(Password);
		if (u.isPresent()) {
			return u.get();
		} else {
			return null;
		}
	}

	@Override
	public Utilisateur login(Utilisateur utilisateur) {
			Utilisateur existingUser = utilisateurRepo.findByEmail(utilisateur.getEmail()).orElse(null);

			if(existingUser.getEmail().equals(utilisateur.getEmail()) &&
					existingUser.getPassword().equals(utilisateur.getPassword()))
			{
				existingUser.setPassword("");
				return existingUser;
			}

			return null;

		}

	@Override
	public Utilisateur findUtilisateurByLastName(String LastName) {
			Optional<Utilisateur> u = utilisateurRepo.findByLastName(LastName);
			if (u.isPresent()) {
				return u.get();
			} else {
				return null;
			}


	}


}
