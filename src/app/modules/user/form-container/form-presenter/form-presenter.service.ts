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
      email : new FormControl('',Validators.required),
      mobile : new FormControl('',Validators.required),
      city : new FormControl('',Validators.required),
      gender : new FormControl('',Validators.required),
      department : new FormControl('',Validators.required),
      hireDate : new FormControl('',Validators.required),
      permanent : new FormControl('',Validators.required),
    })
  }

}
