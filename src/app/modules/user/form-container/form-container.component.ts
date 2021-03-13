import { NumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/model/user.model';
import { UserService } from 'src/app/shared/services/user-services/user.service';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.css']
})
export class FormContainerComponent implements OnInit {

  public editId : number;
  userData$ : Observable<User>;

  constructor(private userService : UserService, private router : Router, private activatedRoute : ActivatedRoute) { 
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      this.getDataById(+id);

    }
  }

  userData : User;
  ngOnInit(): void {
  }

  userAddedData(event){
    this.userData = event;
    this.userService.addData(this.userData);
    this.router.navigate(['./user']);
  }

  getDataById(id){
    this.userData$ = this.userService.getDataById(id)
  }

}
