import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../../../services";
import {IUsers} from "../../../models/IUsers";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  form: FormGroup;
  users: IUsers[];
  @Output()
  event = new EventEmitter<number>()

  constructor(private userService: UserService) {


  }

  ngOnInit(): void {
    this.form = new FormGroup({
      userId: new FormControl(1)
    })
    this.userService.getAll().subscribe(value => this.users = value)
    this.event.emit(this.form.controls.userId.value)
  }

  getUserId(): void {
    this.event.emit(this.form.controls.userId.value)
  }
}
