import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiMedicineService } from '../api-medicine.service';
import { MedicineClass } from '../medicine-class';

@Component({
  selector: 'app-view-medicine',
  templateUrl: './view-medicine.component.html',
  styleUrls: ['./view-medicine.component.css']
})
export class ViewMedicineComponent implements OnInit {
 id=0;
  medicine:any[]=[];
  medicineDetail: MedicineClass=new MedicineClass;
  constructor(private _api:ApiMedicineService,private _router: Router,private _activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    let ob=this._api.getAllMedicine();
    ob.subscribe((res:any)=>{this.medicine=res.records});
  }
  detailMedicine(id:number){}
  editMedicine(id:number){}
  deleteMedicine(id:number){}
  viewMedicine(){}
}
