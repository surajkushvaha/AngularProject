import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiFacultyService } from '../api-faculty.service';
import { FacultyClass } from '../faculty-class';

@Component({
  selector: 'app-add-faculty',
  templateUrl: './add-faculty.component.html',
  styleUrls: ['./add-faculty.component.css']
})
export class AddFacultyComponent implements OnInit {
id=0;
facultyDetail:FacultyClass =new FacultyClass;

  constructor(private _api:ApiFacultyService,private _route: Router,private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this._activatedRoute.snapshot.params.id;
    if(this.id==undefined){
      this.id=0;
    }else{
       let ob=this._api.getFacultyById(this.id);
    ob.subscribe((res:any)=>{this.facultyDetail=res;})
    }
  }
  insertThisFaculty(){
  
  let ob=this._api.insertFaculty(this.facultyDetail);
  ob.subscribe(()=>{
    this._route.navigate(['faculty/facultyDetail']);
  })
}
updateThisFaculty(){
  let ob=this._api.updateFaculty(this.facultyDetail,this.id);
  ob.subscribe((res:any)=>{this._route.navigate(['faculty/facultyDetail'])});
}
addEditFaculty(){
  if(this.id===0){
    this.insertThisFaculty();
  }else{
    this.updateThisFaculty();
  }
}

}
