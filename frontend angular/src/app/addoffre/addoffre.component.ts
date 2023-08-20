import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Offre } from '../model/offre';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-addoffre',
  templateUrl: './addoffre.component.html',
  styleUrls: ['./addoffre.component.css']
})
export class AddoffreComponent implements OnInit {

  constructor(private service:AuthService,private route : Router,private router:ActivatedRoute) { }
  id!:number;
  titre !: string 
       adresse !: string 
       description !: string 
       datexp!: Date;
       
    
  
  offre=new Offre;
  ngOnInit(): void {
  }


  addoffre() {

    this.offre.id=this.id
    this.offre.titre = this.titre;
    this.offre.description = this.description;
    this.offre.adresse = this.adresse;
    this.offre.datexp = this.datexp;


    this.service.addoffre(this.offre).subscribe(res => {
      if(res.titre ==''||res.description ==''||res.adresse =='') {
        alert("all fields must be full");
        this.ngOnInit();
      }else {
        console.log("offre has been added succesfully");
        
        alert("offre has been added succesfully");
        this.route.navigate(['/user']);
      }
    }, err => {
      alert("Something went wrong !! :( ");
      this.ngOnInit();
    })

  }

}
