import {Component} from '@angular/core';
import {UserService} from "../../services/user.service";
import {IUser} from "../../models/IUsers";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  users: IUser[]

  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe(value => {
      this.users = value;
      console.log(this.users)
    })
  }


}
