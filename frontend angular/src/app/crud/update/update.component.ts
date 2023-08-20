import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  user:User=new User();
  id!:number;


  constructor(private service:AuthService, private route : Router,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.router.snapshot.params[('id')];
    this.service.getbyid(this.id).subscribe(data=>{
      this.user=data;
    })
  }
update(){
  this.service.update(this.user).subscribe(data=>{
    this.route.navigate(['admin'])
  })
}
}
