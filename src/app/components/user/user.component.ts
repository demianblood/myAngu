import {Component, Input, OnInit} from '@angular/core';
import {IUsers} from "../../models/IUsers";
import {UserService} from "../../services/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input()
  user: IUsers;
  constructor(private userService: UserService, private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(({id}) => {
    this.userService.getUserById(id).subscribe(value => this.user = value)
  })}

  ngOnInit(): void {
  }

}
