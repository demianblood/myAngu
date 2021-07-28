import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IUsers} from "../models/IUsers";
import {UserService} from "../services/user.service";


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user: IUsers;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {

    this.activatedRoute.params.subscribe(({id}) => {

      this.userService.getUserById(id).subscribe(value => this.user = value);
      console.log(this.user.name)
    })
  }

  ngOnInit(): void {
  }
}