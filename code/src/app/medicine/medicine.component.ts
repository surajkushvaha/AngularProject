import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiMedicineService } from '../api-medicine.service';
import { MedicineClass } from '../medicine-class';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {
id=0;
medicine:any[]=[];
medicineDetail:MedicineClass=new MedicineClass;
  constructor(private _api:ApiMedicineService,private _route: Router) { }

  ngOnInit(): void {
    let ob=this._api.getAllMedicine();
    ob.subscribe((res:any)=>{this.medicine=res.records});
  }

detailMedicine(drugname:any){
    window.open("https://www.google.com/search?q=drug:"+drugname,"_blank");
}
}
