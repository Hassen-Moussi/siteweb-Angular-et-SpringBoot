import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

 
  title = 'mezzoapp';
  data = []
  checkview=false
  constructor( private route : Router) { }
  ngOnInit():void { this.fn()}
fn(){
  axios.get('http://localhost:8080/Utilisateur/AllUtilisateurs').then((res)=>this.data=Object.values(res.data)).then((err)=>console.log(err))
}
nourhen =""
password = ""
date = ""
age = ""
email = ""
Active = ""
firstname = ""
lastname = ""
GetPassword(event:any){
  this.password= event.target.value
  }
  Getfirstname(event:any){
    this.firstname= event.target.value}

    Getlastname(event:any){
      this.lastname= event.target.value}

      Getemail(event:any){
        this.email= event.target.value}

        Getactive(event:any){
          this.Active= event.target.value}

          Getage(event:any){
            this.age= event.target.value}

            Getdate(event:any){
              this.date= event.target.value}

fn1(f:any){
const data = {
password : this.password,
email : this.email,
 age : this.age,
 Active : this.Active,
 firstName : this.firstname,
  lastName : this.lastname
}



  axios.post('http://localhost:8080/Utilisateur/createutilisateur',{password:this.password,firstName:this.firstname,lastName:this.lastname,age:this.age,email:this.email}).then((res)=>console.log(res.data))
  .then((err)=>console.log(err))
  this.route.navigate(['/loginc']);
  
 

}

fndel(id: any){

  axios.delete(`http://localhost:8080/Utilisateur/${id}`).then((res)=>this.fn()).then((err)=>console.log(err))
}

fnupdate(id :any){
  this.checkview=!this.checkview
  this.nourhen=id
}
fnupdate1(){

  axios.put('http://localhost:8080/Utilisateur/UpdateUtilisateur',{id:this.nourhen,password:this.password,lastName:this.lastname,firstName:this.firstname,email:this.email,age:this.age}).then((res)=>this.fn()).then((err)=>console.log(err))
}


}



