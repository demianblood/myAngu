import {Component, Input} from '@angular/core';
import {IUser} from "../../models/IUsers";
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input()
user:IUser
  constructor() {
  }

}
