import { Component, OnInit } from '@angular/core';
import { CheckboxRequiredValidator } from '@angular/forms';
import { Data, Router, TitleStrategy } from '@angular/router';
import axios from 'axios';
import { count, lastValueFrom } from 'rxjs';
import { Utilisateur } from 'src/app/model/condidat';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';
import { __values } from 'tslib';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  closeResult = '';
  data= [] 
  email : string = '';
  username : any;
  name : string = '';
  lastname : string= '';
  password : string = '';
  somme=[];
  active !:boolean;
  data2=[];
  somme1=[];
  user : User = new User();
  utilisateur : Utilisateur=new Utilisateur();
  http: any;
  searchText:any;
  id!:number;

  
  constructor( private authService : AuthService ,private route : Router) { 

  }

  ngOnInit(): void {
    this.getall()
    this.countall()
    this.getall2()
    this.countall2()
    this.username=localStorage.getItem('username');
  }

  logout() {
    localStorage.removeItem("token");
    this.route.navigate(['/']);
  }

getall(){
  axios.get('http://localhost:8080/auth/Alluser').then((res)=>this.data=Object.values(res.data)).then((err)=>console.log(err))
  console.log();
}
countall(){
  axios.get('http://localhost:8080/auth/Alluser').then((res)=>this.somme=Object.values(res.data)).then((res)=>console.log(this.somme.length));
}

updateuser(id:number){
  this.route.navigate(['update',id])
  
}
loding(){
  this.getall()
  this.getall2()
  alert('deleted')
}
delete(id:number){
  if(confirm("Are you sure "))
 this.authService.delet(id).subscribe(data=>{
  this.loding();
  this.ngOnInit();

 })
  
}
getall2(){
  axios.get('http://localhost:8080/Utilisateur/AllUtilisateurs').then((res)=>this.data2=Object.values(res.data)).then((err)=>console.log(err))
  console.log();
}
countall2(){
  axios.get('http://localhost:8080/Utilisateur/AllUtilisateurs').then((res)=>this.somme1=Object.values(res.data)).then((res)=>console.log(this.somme1.length));
}
delete2(id:number){
  if(confirm("Are you sure "))
  this.authService.delet2(id).subscribe(data=>{
   this.loding();
  })
  

}
updateuser2(id:number){
  this.route.navigate(['update2',id])
  
}
searchbyusername(name:string){
this.authService.getuserbyusername(this.name).subscribe(data=>{
  this.user=data;
  console.log(data);
  
});
}
searchbylastname(lastname:string){
  this.authService.getcandidatbylastname(this.lastname).subscribe(data=>{
    this.utilisateur=data;
  });
}
}
