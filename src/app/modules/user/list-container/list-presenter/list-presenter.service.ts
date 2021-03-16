import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from 'src/app/core/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class ListPresenterService {

  userId : Subject<any> = new Subject();
  userId$ : Observable<User>;

  constructor() {
    this.userId$ = this.userId.asObservable();
   }

  deleteUser(value : number){
    this.userId.next(value);
  }
}
