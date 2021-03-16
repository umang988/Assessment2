import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { User } from 'src/app/core/model/user.model';
import { ListPresenterService } from '../list-presenter/list-presenter.service';


@Component({
  selector: 'app-list-pesentation',
  templateUrl: './list-pesentation.component.html',
  styleUrls: ['./list-pesentation.component.css']
})
export class ListPesentationComponent implements OnInit {

  searchValue : string;

  startIndex = 0;
  endIndex = 5;

  private _userList: User[];

  @Input() public set userList(value: User[]) {
    if (value) {
      this._userList = value
    }
  }

  public get userList(): User[] {
    return this._userList
  }

  @Output() removeUser : EventEmitter<User> = new EventEmitter();

  constructor(private listPresenterService : ListPresenterService) {
    this._userList = null;
   }

  ngOnInit(): void {    
    this.listPresenterService.userId$.subscribe((userId) =>{
      this.removeUser.emit(userId);
    })
  }

  deleteUser(id){
    this.listPresenterService.deleteUser(id);
  }

  getArray(length){
    return new Array((Math.floor(length/5))+1);
  }

  updateIndex(pageIndex){
    this.startIndex = pageIndex * 5;
    this.endIndex = this.startIndex + 5;
  }

  sortPipe(){
  }

}
