import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiUserService } from '../api-user.service';
import { LoginserviceService } from '../loginservice.service';
import { UserClass } from '../user-class';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  id=0;
  // user:any[]=[];
  // userDetail: UserClass=new UserClass;
  errorMessage=""
  UserName:string="";
  PassWord:string="";
  constructor(private _api:ApiUserService,private _route: Router,public _login:LoginserviceService) { }

  ngOnInit(): void {
    
  }
  checkLogin(){   
    // this._api.getAllUser().subscribe((res:any)=>{
    //   res.records.forEach((temp:{UserName:string,Password:string}) => {        
        if(this.UserName==="surajkushvaha" && this.PassWord==="123456"){
          sessionStorage.setItem('tempSaveUserName',this.UserName);
          this._login.logged=true;
          this._route.navigate(['home']);
        }          
       
      // });
      this.UserName="";
      this.PassWord="";
      this.errorMessage="Invalid username or password";

        setTimeout(() => {
          this.errorMessage="";
        }, 2000);
    // });
  }

}
