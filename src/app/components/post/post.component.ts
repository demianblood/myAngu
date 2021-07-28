import {Component, Input, OnInit} from '@angular/core';
import {IPosts} from "../../models/IPosts";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input()
  post: IPosts
constructor(private router:Router) {
}
  ngOnInit(): void {
  }

  navigateToPostDetails(): void {
this.router.navigate(['posts'])
  }
}
