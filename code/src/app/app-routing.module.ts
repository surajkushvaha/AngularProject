import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFacultyComponent } from './add-faculty/add-faculty.component';
// import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AuthGuard } from './auth.guard';
import { DetailFacultyComponent } from './detail-faculty/detail-faculty.component';
// import { DetailMedicineComponent } from './detail-medicine/detail-medicine.component';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { FacultyComponent } from './faculty/faculty.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MedicineComponent } from './medicine/medicine.component';
import { UserComponent } from './user/user.component';
import { ViewFacultyComponent } from './view-faculty/view-faculty.component';
// import { ViewMedicineComponent } from './view-medicine/view-medicine.component';
import { ViewUserComponent } from './view-user/view-user.component';

const routes: Routes = [
  //login
  {path:"login",component:LoginComponent},
  //home
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent,canActivate:[AuthGuard]},

  //faculty
  {path:"faculty",component:FacultyComponent,canActivate:[AuthGuard]},
  {path:"faculty/facultyDetail",component:ViewFacultyComponent,canActivate:[AuthGuard]},
  {path:"faculty/addfaculty",component: AddFacultyComponent,canActivate:[AuthGuard]},
  {path:"faculty/editfaculty",component:AddFacultyComponent,canActivate:[AuthGuard]},
  {path:"faculty/editfaculty/:id",component:AddFacultyComponent,canActivate:[AuthGuard]},
  {path:"faculty/:id",component:DetailFacultyComponent,canActivate:[AuthGuard]},
  
  //user
  {path:"user",component:UserComponent,canActivate:[AuthGuard]},
  {path:"user/userDetail",component:ViewUserComponent,canActivate:[AuthGuard]},
  {path:"user/adduser",component: AddUserComponent,canActivate:[AuthGuard]},
  {path:"user/edituser",component:AddUserComponent,canActivate:[AuthGuard]},
  {path:"user/edituser/:id",component:AddUserComponent,canActivate:[AuthGuard]},
  {path:"user/:id",component:DetailUserComponent,canActivate:[AuthGuard]},

  //medicine
  {path:"medicine",component:MedicineComponent},
  // {path:"medicine/medicineDetail",component:ViewMedicineComponent},
  // {path:"medicine/addmedicine",component: AddMedicineComponent},
  // {path:"medicine/editmedicine",component:AddMedicineComponent},
  // {path:"medicine/editmedicine/:id",component:AddMedicineComponent},
  // {path:"medicine/:id",component:DetailMedicineComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
