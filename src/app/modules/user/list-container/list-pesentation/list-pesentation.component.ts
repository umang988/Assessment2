import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/core/model/user.model';

@Component({
  selector: 'app-list-pesentation',
  templateUrl: './list-pesentation.component.html',
  styleUrls: ['./list-pesentation.component.css']
})
export class ListPesentationComponent implements OnInit {

  @Input() user : User;

  @Output() removeUser : EventEmitter<User> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {    
    console.log(this.user)
  }

  deleteUser(id){
    this.removeUser.emit(id);
  }

}
