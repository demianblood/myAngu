import {Component, OnInit} from '@angular/core';
import {IUsers} from "../../models/IUsers";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user: IUsers;

  constructor(private router:Router, private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {
      this.user=this.router.getCurrentNavigation()?.extras.state as IUsers;
    })
 }

  ngOnInit(): void {
  }

}
