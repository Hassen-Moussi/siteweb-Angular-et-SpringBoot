package com.example.mezzo_rec.Repository;


import com.example.mezzo_rec.Entites.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {
  
      
    


    Optional<User> findByUsername(String username);
    public void deleteUserById(Long id);


    List<User> findByActive(Boolean active);

    Optional<User> findUserById(Long id);
}

