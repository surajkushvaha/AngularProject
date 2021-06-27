import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiUserService } from '../api-user.service';
import { UserClass } from '../user-class';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
id=0;
userDetail:UserClass=new UserClass;
  constructor(private _activatedRoute:ActivatedRoute,private _api:ApiUserService,private _route:Router) { }

  ngOnInit(): void {
    this.id=this._activatedRoute.snapshot.params.id;
    if(this.id==undefined){
      this.id=0;
    }else{
       let ob=this._api.getUserById(this.id);
    ob.subscribe((res:any)=>{this.userDetail=res;})
    }
  }
 insertThisUser(){
  
  let ob=this._api.insertUser(this.userDetail);
  ob.subscribe(()=>{
    this._route.navigate(['user/userDetail']);
  })
}
updateThisUser(){
  let ob=this._api.updateUser(this.userDetail,this.id);
  ob.subscribe((res:any)=>{this._route.navigate(['user/userDetail'])});
}
addEditUser(){
  if(this.id===0){
    this.insertThisUser();
  }else{
    this.updateThisUser();
  }
}
}
