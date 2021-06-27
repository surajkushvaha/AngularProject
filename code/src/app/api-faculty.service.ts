import { Injectable } from '@angular/core';
import {  HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiFacultyService {
  facultyUrl="https://arjunbala.com/DFaculty/api.php/records/faculty";
  constructor(private _http:HttpClient) { }
  getFacultyById(id:number){
    return this._http.get(this.facultyUrl+'/'+id);
  }
  getAllFaculty(){
    return this._http.get(this.facultyUrl);
  }
  insertFaculty(form:any){
    return this._http.post(this.facultyUrl,form)
  }
  updateFaculty(form:any,id:number){
    return this._http.put(this.facultyUrl+'/'+id,form)
  }
  deleteFaculty(id:number){
    return this._http.delete(this.facultyUrl+'/'+id);
  }

}
