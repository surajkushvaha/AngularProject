import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiUserService } from '../api-user.service';
import { UserClass } from '../user-class';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {
id=0;
userDetail:UserClass=new UserClass;
  constructor(private _api:ApiUserService,private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id= this._activatedRoute.snapshot.params.id;
    let ob=this._api.getUserById(this.id);
    ob.subscribe((res:any)=>{this.userDetail=res})
  }

}
