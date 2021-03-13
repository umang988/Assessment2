import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/core/model/user.model';

@Component({
  selector: 'app-list-pesentation',
  templateUrl: './list-pesentation.component.html',
  styleUrls: ['./list-pesentation.component.css']
})
export class ListPesentationComponent implements OnInit {

  @Input() user : User;

  constructor() { }

  ngOnInit(): void {    
    console.log(this.user)
  }

}
