import {Component, OnInit} from '@angular/core';
import {IUsers} from "../../models/IUsers";
import {UserService} from "../../services/user.service";
import {createContentChildren} from "@angular/compiler/src/core";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: IUsers[];
  user:IUsers;
  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe(value => this.users = value);
  }

  ngOnInit(): void {

  }
  submit(tref: HTMLFormElement) {
    console.log(tref.user.value );
  }
}
