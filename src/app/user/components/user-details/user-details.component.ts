import {Component, Input, OnInit} from '@angular/core';
import {IUsers} from "../../../../models/IUsers";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../services-user/user.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
user:IUsers
  constructor(private activatedRoute:ActivatedRoute, private userService:UserService) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id})=>{
      this.userService.getUserById(id).subscribe(value => this.user=value)
    })
  }

}
