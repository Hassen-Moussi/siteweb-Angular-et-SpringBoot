import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import axios from 'axios';
import { Offre } from '../model/offre';

import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-homme',
  templateUrl: './homme.component.html',
  styleUrls: ['./homme.component.css']
})
export class HommeComponent implements OnInit {
  currentdate = new Date();
  data=[];
  offre = new Offre();
  datexp:any;
  theRandomNumber = Math.floor(Math.random() * 10) + 1; 

  constructor(private service:AuthService, private route : Router,private router:ActivatedRoute) { }

  ngOnInit(): void {
    
   
   
      this.getoffersbydate()
    
    
    console.log(this.currentdate.getSeconds());
  }

  getalloffres(){
    axios.get('http://localhost:8080/Offre/Alloffres').then((res)=>this.data=Object.values(res.data)).then((err)=>console.log(err))
    console.log();
  }
  getoffersbydate(){
    this.offre.datexp=  this.datexp;
   
    this.service.getofferhome().subscribe(res=>{
     
      this.data=res;
      
      
     

    })
  }
  deleteoffre(id:number){
    
   this.service.deletoffre(id).subscribe(data=>{
    console.log("offre has been deleted ");
   })
    
  }
}
