import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { User } from 'src/app/core/model/user.model';
import { FormGroup } from '@angular/forms';
import { FormPresenterService } from '../form-presenter/form-presenter.service';

@Component({
  selector: 'app-form-pesentation',
  templateUrl: './form-pesentation.component.html',
  styleUrls: ['./form-pesentation.component.css']
})
export class FormPesentationComponent implements OnInit {

  userForm : FormGroup;
  private _user: any;
  public isEditable : boolean = false;

  department = [
    'Angular','UI','ML','QA','BA','.net'
  ]

  @Input() set userData(value : User){
    if(value){
      this._user = value;
      this.setUserDetails(value);
      this.isEditable = true;
    }
  }

  get employee(): User {
    console.log('Getter' + this._user);
    return this._user;
  }

  @Output() userAddedData : EventEmitter<FormGroup> = new EventEmitter();

  @Output() userEditedData : EventEmitter<FormGroup> = new EventEmitter();

  constructor(private formPresenterService : FormPresenterService) {
    this.userForm = this.formPresenterService.bindForm();
    this._user = null;
   }

  ngOnInit(): void {
    }

  onSubmit(){
    if(this.isEditable === false){
      this.userAddedData.emit(this.userForm.value);
    }
    else{
      this.userEditedData.emit(this.userForm.value)
    }
    
  }

  setUserDetails(value){
    this.userForm.reset(value);
  }

  clearForm(){
    this.userForm.reset();
  }

}
