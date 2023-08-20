import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import { Offre } from '../model/offre';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit {
  data=[];
  id!:number;
  titre:any;


  constructor(private route : Router,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.getalloffres();
   
  }

  getalloffres(){
    axios.get('http://localhost:8080/Offre/Alloffres').then((res)=>this.data=Object.values(res.data)).then((err)=>console.log(err))
    console.log();
   
  }
  sendoffreid(id:number){
    
    this.route.navigate(['addcandidature',id]);
  }

 
}
