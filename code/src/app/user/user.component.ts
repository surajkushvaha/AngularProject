import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiUserService } from '../api-user.service';
import { UserClass } from '../user-class';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
id=0;
  user:any[]=[];
  userDetail:UserClass=new UserClass;
  constructor(private _api:ApiUserService,private _route: Router) { }

  ngOnInit(): void { 
    let ob=this._api.getAllUser();
    ob.subscribe((res:any)=>{this.user=res.records});
  }
detailUser(id:number){
  this._route.navigate(['user',id]);
}

}
