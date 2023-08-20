import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from 'src/app/model/condidat';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-update2',
  templateUrl: './update2.component.html',
  styleUrls: ['./update2.component.css']
})
export class Update2Component implements OnInit {
 utilisateur:Utilisateur=new Utilisateur;
  id!:number;

  constructor(private service:AuthService, private route : Router,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.router.snapshot.params[('id')];
    this.service.getbyid2(this.id).subscribe(data=>{
      this.utilisateur=data;
    })
  }
update2(){
  this.service.update2(this.utilisateur).subscribe(data=>{
    this.route.navigate(['admin'])
  })
}
}


