import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidature } from '../model/candidature';
import { Utilisateur } from '../model/condidat';

import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-candidature',
  templateUrl: './candidature.component.html',
  styleUrls: ['./candidature.component.css']
})
export class CandidatureComponent implements OnInit {
idoffre!:any;
  idcandidature:number=0;
  email : string = '';
  firstname : string = '';
  lastname : string = '';
  experience : string = '';
  telnum : number=0;
  cv : string = '';
  utilisateur=new Utilisateur();

  candidature : Candidature = new Candidature();

  constructor( private authService : AuthService, private route : Router,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.idoffre=this.router.snapshot.params[('id')];
    console.log(this.idoffre)
    
  }

  addcandidature() {

    this.candidature.id=this.idcandidature;
    this.candidature.firstname = this.firstname;
    this.candidature.lastname = this.lastname;
    this.candidature.email = this.email;
    this.candidature.experience = this.experience;
    this.candidature.cv = this.cv;
    this.candidature.telnum = this.telnum;

    this.authService.addcandidature(this.candidature).subscribe(res => {
      
        console.log("application has been added succesfully");
        alert("application has been added succesfully");
        localStorage.setItem("idof",this.idoffre);
        localStorage.setItem("idcan",res.id);
        this.route.navigate(['/']);

      
    }, err => {
      alert("Something went wrong !! :( ");
      this.ngOnInit();
    })

  }

  update2(){
    this.authService.update2(this.utilisateur).subscribe(data=>{
      alert("updated");
      

    })
  }

 

}
