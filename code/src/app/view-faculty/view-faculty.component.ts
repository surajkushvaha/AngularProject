import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiFacultyService } from '../api-faculty.service';
import { FacultyClass } from '../faculty-class';

@Component({
  selector: 'app-view-faculty',
  templateUrl: './view-faculty.component.html',
  styleUrls: ['./view-faculty.component.css']
})
export class ViewFacultyComponent implements OnInit {
  id=0;
  faculty:any[]=[];
  facultyDetail: FacultyClass=new FacultyClass;
  constructor(private _api:ApiFacultyService,private _route: Router,private _activateRoute:ActivatedRoute) { 

  }

  ngOnInit(): void {
    let ob=this._api.getAllFaculty();
    ob.subscribe((res:any)=>{this.faculty=res.records});
    
  }
  detailFaculty(id:number){this._route.navigate(['faculty',id])}
  editFaculty(id:number){this._route.navigate(['faculty/editfaculty/'+id]);}
  deleteFaculty(ID:number){ let ob =this._api.deleteFaculty(ID);
    ob.subscribe((res:any)=>{
      this.ngOnInit();//refresh the component
    });}

}
