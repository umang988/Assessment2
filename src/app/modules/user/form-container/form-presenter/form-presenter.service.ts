import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormPresenterService {

  constructor() { }

  bindForm(){
    return new FormGroup({
      name : new FormControl(),
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
