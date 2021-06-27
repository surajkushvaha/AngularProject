import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FacultyComponent } from './faculty/faculty.component';
import { UserComponent } from './user/user.component';
import { MedicineComponent } from './medicine/medicine.component';
import { HeaderComponent } from './header/header.component';
import { AddFacultyComponent } from './add-faculty/add-faculty.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailFacultyComponent } from './detail-faculty/detail-faculty.component';
import { ViewFacultyComponent } from './view-faculty/view-faculty.component';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { DetailMedicineComponent } from './detail-medicine/detail-medicine.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { ViewMedicineComponent } from './view-medicine/view-medicine.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FacultyComponent,
    UserComponent,
    MedicineComponent,
    HeaderComponent,
    AddFacultyComponent,
    AddUserComponent,
    AddMedicineComponent,
    DetailFacultyComponent,
    ViewFacultyComponent,
    DetailUserComponent,
    DetailMedicineComponent,
    ViewUserComponent,
    ViewMedicineComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
