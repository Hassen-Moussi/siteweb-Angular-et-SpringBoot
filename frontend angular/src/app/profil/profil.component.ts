
import { Component, OnInit } from '@angular/core';
import { Router, TitleStrategy } from '@angular/router';
import axios from 'axios';
import { User } from '../model/user';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
id!:any;
username!:any;
email!:any;

myDataUri:any;
user : User = new User;

 
  constructor(private service:AuthService,private route:Router) { }

  ngOnInit(): void {
    this.id= localStorage.getItem('id');
    this.username= localStorage.getItem('username');
    this.email= localStorage.getItem('email');
    this.service.getbyid(this.id).subscribe(data=>{
      this.user=data;
    })
    console.log(this.username)
    
  }

  update(){
    this.service.update(this.user).subscribe(data=>{
      alert("Updating with Successfuly")
    })
  }


 
 

  
}
