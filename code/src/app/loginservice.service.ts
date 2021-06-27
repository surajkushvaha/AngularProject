import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  logged : boolean=false;
  constructor() { }
}
