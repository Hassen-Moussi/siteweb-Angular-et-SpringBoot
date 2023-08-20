import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : string = '';
  password : string = '';
  role : string = '';
  active!:boolean;
  id!:number; 
  

  user : User = new User();

  roles : string='';

  constructor(private authService : AuthService, private route : Router ) { 
   
      
    
  
   
  }

  ngOnInit(): void {
    this.username = '';
    this.password = '';
 
  }


  iduser(id:number){
    this.route.navigate(['/user',id])
    
  }



  login() {
  
    this.user.username = this.username;
    this.user.password = this.password;
    this.user.active=this.user.active;
    this.user.role = this.role;

    this.authService.login(this.user).subscribe(res => {
      console.log(res)

      if(res == null) {
        alert("Uername or password is wrong");
   
        this.ngOnInit();
      }


     
     
      
  
     
      else {
        console.log("Login successful");
        localStorage.setItem("token",res.token);
        localStorage.setItem("id",res.id);
        localStorage.setItem("username",res.username);
       
       
        if( res.role == 'user') {
          this.route.navigate(['/user']);
        }

        if( res.role == 'admin') {
          this.route.navigate(['/admin']);
        }
      

      }

    },
    
    err => {
      
      alert("Login failed Or You've been rejected By admin");
      
      this.ngOnInit();
    })

  }



}
