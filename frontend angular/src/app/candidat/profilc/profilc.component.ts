import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import { Utilisateur } from 'src/app/model/condidat';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-profilc',
  templateUrl: './profilc.component.html',
  styleUrls: ['./profilc.component.css']
})
export class ProfilcComponent implements OnInit {
  id!:any;
  email!:any;
  utilisateur = new Utilisateur;
  firstname!:any;
  competanceLi!:any;
  competence!:any;
  tel!:any;
  etude=[
    'bac',
    'bac+3',
    'bac+5',
    'ingenieur'
    

  ];
  genre=[
    'homme',
    'famme'

  ];

  constructor(private service:AuthService,private route : Router,private router:ActivatedRoute ) { }

  ngOnInit(): void {
    this.firstname=localStorage.getItem("name")
    this.email=localStorage.getItem('emailc');
    console.log(this.email);

    this.id=localStorage.getItem('idc');
    this.service.getbyid2(this.id).subscribe(data=>{
      this.utilisateur=data;
      
      
    });
  }

  update2(){
    this.service.update2(this.utilisateur).subscribe(data=>{
      alert("updated");
      this.route.navigate(['profilc']);

    })
  }



}