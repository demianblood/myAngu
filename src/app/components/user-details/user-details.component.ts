import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {IUsers} from "../../models/IUsers";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
user:IUsers;
  constructor(private router:Router) {
  this.user= this.router.getCurrentNavigation()?.extras.state as IUsers
  }

  ngOnInit(): void {
  }

}
