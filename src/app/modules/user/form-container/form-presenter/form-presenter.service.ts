import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormPresenterService {

  constructor() {
   }

  bindForm(){
    return new FormGroup({
      name : new FormControl('',Validators.required),
      email : new FormControl(),
      mobile : new FormControl(),
      city : new FormControl(),
      gender : new FormControl(),
      department : new FormControl(),
      hireDate : new FormControl(),
      permanent : new FormControl(),
    })
  }

}
