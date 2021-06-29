import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiUserService } from '../api-user.service';
import { UserClass } from '../user-class';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
id=0;
  user:any[]=[];
  userDetail: UserClass=new UserClass;
  constructor(private _api:ApiUserService,private _route: Router,private _activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    let ob=this._api.getAllUser();
    ob.subscribe((res:any)=>{this.user=res.records});
  }
  detailUser(id:number){this._route.navigate(['user',id])}
  editUser(id:number){this._route.navigate(['user/edituser/'+id]);}
  deleteUser(ID:number){let ob =this._api.deleteUser(ID);
    ob.subscribe((res:any)=>{
      this.ngOnInit();//refresh the component
    });}

}
