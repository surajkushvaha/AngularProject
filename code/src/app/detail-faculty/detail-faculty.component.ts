import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiFacultyService } from '../api-faculty.service';
import { FacultyClass } from '../faculty-class';

@Component({
  selector: 'app-detail-faculty',
  templateUrl: './detail-faculty.component.html',
  styleUrls: ['./detail-faculty.component.css']
})
export class DetailFacultyComponent implements OnInit {
id=0;

facultyDetail: FacultyClass=new FacultyClass;
  constructor(private _api:ApiFacultyService,private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id= this._activatedRoute.snapshot.params.id;
    let ob=this._api.getFacultyById(this.id);
    ob.subscribe((res:any)=>{this.facultyDetail=res})
  }

}
