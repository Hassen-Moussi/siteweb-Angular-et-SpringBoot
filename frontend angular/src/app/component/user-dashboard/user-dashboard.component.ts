import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import { Offre } from 'src/app/model/offre';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  idoffre!:any;
  idcandidature!:any;
id!:number;



offre=new Offre
offerids=[];
user=new User
data2=[];
dataoffre=[]
somme1=[];
username:any;



  constructor(private service:AuthService,private route : Router,private router:ActivatedRoute  ) { }

  ngOnInit(): void {
   

   this.idoffre=localStorage.getItem('idof');
   console.log(this.idoffre);
   this.idcandidature=localStorage.getItem('idcan');
  console.log(this.idcandidature);

     this.getalloffres()
     this.getall2()
     this.countall2()
     this.id=this.router.snapshot.params[('id')];
     this.service.getbyid(this.id).subscribe(data=>{
      console.log(data);
      this.username=localStorage.getItem('username');
      
     })

     
    
     
  }

 





  logout() {
    localStorage.removeItem("token");
    this.route.navigate(['/']);
  }
  getall2(){
    axios.get('http://localhost:8080/Utilisateur/AllUtilisateurs').then((res)=>this.data2=Object.values(res.data)).then((err)=>console.log(err))
    console.log();
  }
  countall2(){
    axios.get('http://localhost:8080/Utilisateur/AllUtilisateurs').then((res)=>this.somme1=Object.values(res.data)).then((res)=>console.log(this.somme1.length));
  }
 
  
  addoffre(){
    this.route.navigate(['/addoffre']);
  }



      getalloffres(){
     
        axios.get('http://localhost:8080/Offre/Alloffres').then((res)=>this.dataoffre=Object.values(res.data)).then((err)=>console.log(err))
        console.log();
      }


      deleteoffre(id:number){
        if(confirm("Are you sure "))
        this.service.deletoffre(id).subscribe(data=>{
         alert("offre deleted")
         this.ngOnInit();
        })
        
      
      }

      updateoffreid(id:number){
        this.route.navigate(['updateoffre',id])
        
      }

}
