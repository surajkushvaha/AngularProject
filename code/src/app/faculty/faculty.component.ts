import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiFacultyService } from '../api-faculty.service';
import { FacultyClass } from '../faculty-class';
@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {
  id=0;
  faculty:any[]=[];
  facultyDetail:FacultyClass=new FacultyClass;
  constructor(private _api:ApiFacultyService,private _route: Router) { }

  ngOnInit(): void { 
    let ob=this._api.getAllFaculty();
    ob.subscribe((res:any)=>{this.faculty=res.records});
  }
detailFaculty(id:number){
  this._route.navigate(['faculty',id]);
}

}
