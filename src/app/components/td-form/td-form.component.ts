import {Component, OnInit} from '@angular/core';
import {IUsers} from "../../models/IUsers";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.scss']
})
export class TdFormComponent implements OnInit {
  users: IUsers[];
  user: IUsers;
  userId:number;
  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => this.users = value);

  }


  save(tref: HTMLFormElement) {
    this.userService.getUserById(this.userId).subscribe(value => this.user=value)

  }
}
