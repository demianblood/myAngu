import {Component} from '@angular/core';
import {IUserModel} from "../models/UserModel";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users:IUserModel[] = [
    {name: "Leanne Graham", age: 31, status: true},
    {name: "Ervin Howell", age:31,status: false},
    {name: "Clementine Bauch",age: 31,status: true},
    {name: "Patricia Lebsack", age: 31, status: false},
    {name: "Chelsey Dietrich", age: 31, status: true},
    {name: "Mrs. Dennis Schulist", age: 31, status: false},
    {name: "Kurtis Weissnat", age: 31, status: true},
    {name: "Nicholas Runolfsdottir V", age: 31, status: false},
    {name: "Glenna Reichert", age: 31, status: true},
    {name: "Clementina DuBuque", age: 31, status: false}

  ];
  constructor() {
  }


}
