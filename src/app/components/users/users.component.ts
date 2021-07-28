import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {IUsers} from "../../models/IUsers";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: IUsers[];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(value => this.users = value)
  }
}
