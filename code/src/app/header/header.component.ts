import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  home="nav-link sactive";
  users="nav-link";
  faculty="nav-link ";
  medicine="nav-link";
  constructor(private _route:Router,public _login:LoginserviceService) { }

  ngOnInit(): void {
    
  }
  logout(){
    sessionStorage.removeItem('tempSaveUserName');
    this._login.logged=false;
    this._route.navigate(['login']);
}
  login(){
    this._route.navigate(['login']);
   
  }

}
