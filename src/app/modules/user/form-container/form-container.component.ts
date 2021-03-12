import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/model/user.model';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.css']
})
export class FormContainerComponent implements OnInit {

  constructor() { }

  getData : User;
  ngOnInit(): void {
  }

  formData(event){
    this.getData = event;
    console.log(this.getData);
    
  }

}
