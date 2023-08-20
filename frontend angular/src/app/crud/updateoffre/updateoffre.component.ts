import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Offre } from 'src/app/model/offre';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-updateoffre',
  templateUrl: './updateoffre.component.html',
  styleUrls: ['./updateoffre.component.css']
})
export class UpdateoffreComponent implements OnInit {
  offre:Offre=new Offre();
  id!:number;
  constructor(private service:AuthService, private route : Router,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.router.snapshot.params[('id')];
    this.service.getoffrebyid(this.id).subscribe(data=>{
      this.offre=data;
    })
  }
  updateoffre(){
    this.service.updateoffre(this.offre).subscribe(data=>{
      this.route.navigate(['user'])
    })
  }
}
