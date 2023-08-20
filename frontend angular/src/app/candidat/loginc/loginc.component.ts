import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { Utilisateur } from 'src/app/model/condidat';
import { AuthService } from 'src/app/service/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './loginc.component.html',
  styleUrls: ['./loginc.component.css']
})
export class LogincComponent implements OnInit {
  
  constructor(private authService : AuthService, private route : Router ) { 
   
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
    
   
  }
 utilisateur = new Utilisateur;
  email = ""
  password=""
  data=[]
  GetPassword(event:any){
    this.password= event.target.value
    }
    GetEmail(event:any){
      this.email= event.target.value
      }

 

      logincandidat() {
  
        
        this.utilisateur.password = this.password;
        this.utilisateur.email = this.email;
        
        
    
        this.authService.loginc(this.utilisateur).subscribe(res => {
          console.log(res)
    
          if(res == null) {
            alert("Uername or password is wrong");
       
            this.ngOnInit();
          }
 
         
          else {
            alert("Login successful");
            localStorage.setItem("idc",res.id);
            localStorage.setItem("name",res.firstName);
            localStorage.setItem("emailc",res.email);
            this.route.navigate(['profilc']);
    
          }
    
        },
        
      )
    
      }


 
}
