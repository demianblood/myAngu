import {Component, Input, OnInit} from '@angular/core';
import {IUsers} from "../../models/IUsers";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input()
  user: IUsers;
constructor(private router:Router, private activatedRoute:ActivatedRoute){

}

  ngOnInit(): void {
  }
  navigateToUserDetails():void{
  this.router.navigate([this.user.id ],{relativeTo:this.activatedRoute})
  }
}
