package com.example.mezzo_rec.Repository;

import java.util.List;
import java.util.Optional;


import com.example.mezzo_rec.Entites.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface UtilisateurRepository extends JpaRepository<Utilisateur, Long> {




	public List<Utilisateur> findByEmailOrPassword(String Email, String Password);

	public Optional<Utilisateur> findByPassword(String Password);


	Optional<Utilisateur> findByEmail(String email);

    Optional<Utilisateur> findByLastName(String lastName);
}
