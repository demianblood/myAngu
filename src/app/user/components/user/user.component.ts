import {Component, Input, OnInit} from '@angular/core';
import {IUsers} from "../../../../models/IUsers";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input()
  user: IUsers;

  constructor() {
  }

  ngOnInit(): void {
  }

}
