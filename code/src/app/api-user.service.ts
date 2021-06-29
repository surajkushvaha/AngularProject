import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiUserService {
userUrl="https://arjunbala.com/DFaculty/api.php/records/user";
  constructor(private _http:HttpClient) { }
  getUserById(id:number){
    return this._http.get(this.userUrl+'/'+id);
  }
  getAllUser(){
    return this._http.get(this.userUrl);
  }
  insertUser(form:any){
    return this._http.post(this.userUrl,form)
  }
  updateUser(form:any,id:number){
    return this._http.put(this.userUrl+'/'+id,form)
  }
  deleteUser(id:number){
    return this._http.delete(this.userUrl+'/'+id);
  }
}
