package com.example.mezzo_rec.Controllers;


import com.example.mezzo_rec.Entites.User;
import com.example.mezzo_rec.Services.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:4200")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public User Register(@RequestBody User user) {

        return  authService.register(user);


    }

    @PostMapping("/login")
    public User login(@RequestBody User user) {

        return authService.login(user);
    }


    @GetMapping(path = "/{active}")
    public List<User> findUtilisateurByActif(@PathVariable Boolean active) {
        return authService.findAllUserByActif(active);
    }


    @GetMapping(path="Alluser")
    public List <User>getAllAdmins(){
        return authService.getAllAdmins();
    }
    @PutMapping(path = "/update")
    public User updateUser(@RequestBody User user) {
        return authService.updateUser(user);
    }
    @DeleteMapping(path ="delete/{id}")
    public void DeleteUser(@PathVariable Long id) {
        authService.deleteUserById(id);
    }


    @GetMapping(path ="/FindById/{id}")
    public ResponseEntity<User> findById(@PathVariable Long id) {
        Optional<User> user = authService.findById(id);
        return user.map(ResponseEntity::ok)

                .orElseGet(() -> ResponseEntity.notFound()
                        .build());

    }

    @GetMapping(path ="/FindBy/{id}")
    public Boolean findUserByUsername(@PathVariable Long id) {
        return authService.findUserByUsername(id);

    }

    @GetMapping(path ="/FindByUsername/{username}")
    public User findByUsername(@PathVariable String username) {
        return authService.findByUsername(username);

    }


}
