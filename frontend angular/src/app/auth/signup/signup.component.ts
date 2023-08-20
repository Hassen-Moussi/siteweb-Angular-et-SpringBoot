import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
id:number=0;
  email : string = '';
  username : string = '';
  password : string = '';
  counter:any;
  url="./assets/img"

  user : User = new User();

  constructor( private authService : AuthService, private route : Router) { }

  ngOnInit(): void {
    this.id;
    this.username = '';
    this.password = '';
    this.email = '';
  }

  signup() {

this.user.id=this.id
    this.user.username = this.username;
    this.user.password = this.password;
    this.user.email = this.email;
    this.user.role = 'user';

    this.authService.signUp(this.user).subscribe(res => {
      if(res.username ==''||res.email ==''||res.password =='') {
        alert("Registration failed");
        this.ngOnInit();
      }else {
        console.log("Registration successful");
        console.log(res.username);
        alert("Registration successful");
        this.route.navigate(['/login']);
      }
    }, err => {
      alert("Registration failed.");
      this.ngOnInit();
    })

  }

  onselectFile(e:any){

    if (e.target.file){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.url=event.target.result;
      }
    }
  }

}
