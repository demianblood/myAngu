import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services";
import {IUsers} from "../../models/IUsers";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  user: IUsers

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  getId(id: number) {
    this.userService.getUserById(id).subscribe(value =>this.user=value)
  }
}
