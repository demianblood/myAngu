import {Component, OnInit} from '@angular/core';
import {IUsers} from "../../../../models/IUsers";
import {UserService} from "../../services-user/user.service";

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
