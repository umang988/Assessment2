import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  @Output() formData : EventEmitter<FormGroup> = new EventEmitter();

  constructor(private formPresenterService : FormPresenterService) {
    this.userForm = this.formPresenterService.bindForm();
   }

  ngOnInit(): void {
    }

  onSubmit(){
    this.formData.emit(this.userForm.value)
  }

}
