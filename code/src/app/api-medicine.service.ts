import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiMedicineService {
medicineUrl="https://arjunbala.com/DFaculty/api.php/records/medicines"

  constructor(private _http:HttpClient) { }
  getMedicineById(id:number){
    return this._http.get(this.medicineUrl+'/'+id);
  }
  getAllMedicine(){
    return this._http.get(this.medicineUrl);
  }
  insertMedicine(form:any){
    return this._http.post(this.medicineUrl,form)
  }
  updateMedicine(form:any,id:number){
    return this._http.put(this.medicineUrl+'/'+id,form)
  }
  deleteMedicine(id:number){
    return this._http.delete(this.medicineUrl+'/'+id);
  }}
