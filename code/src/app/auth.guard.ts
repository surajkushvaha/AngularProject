import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginserviceService } from './loginservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _route:Router,public _login:LoginserviceService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let tempUserName=sessionStorage.getItem('tempSaveUserName');
      if(tempUserName===null){
        this._login.logged=false;
        this._route.navigate(['login']);
        return false;
      }else{
        this._login.logged=true;
        return true;
      }
    }
  
}
