import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/core/model/user.model';
import { UserService } from 'src/app/shared/services/user-services/user.service';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.css']
})
export class ListContainerComponent implements OnInit {

  public user$ : Observable<User> = of();

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.getDataFromService();
  }

  getDataFromService () {
    
    this.user$ = this.userService.getData()
    
  }

  removeUser(event){
    if(confirm('Are you sure ?')){
      this.userService.deleteData(event);
    }
    
  }

}
