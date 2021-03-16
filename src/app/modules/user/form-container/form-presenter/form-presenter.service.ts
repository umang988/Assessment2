import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { User } from 'src/app/core/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class FormPresenterService {

  private userData : Subject<User> = new Subject<User>();
  public userData$ : Observable<User>

  constructor() {
    this.userData$ = this.userData.asObservable();
   }

  bindForm(){
    return new FormGroup({
      name : new FormControl('',[Validators.required, Validators.pattern('[A-Za-z ]{1,32}')]),
      email : new FormControl('',[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      mobile : new FormControl('',[Validators.required, Validators.pattern('[1-9][0-9]{9}')]),
      city : new FormControl('',[Validators.required, Validators.pattern('[A-Za-z ]{1,20}')]),
      gender : new FormControl('',Validators.required),
      department : new FormControl('',Validators.required),
      hireDate : new FormControl('',Validators.required),
      permanent : new FormControl(''),
    })
  }

  userDetails(userForm : FormGroup){
    if(userForm.invalid){
      console.log("Form is Invalid")
    }
    else{
      this.userData.next(userForm.value)
    }
  }

}
