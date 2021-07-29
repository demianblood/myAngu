import {Component, Input, OnInit} from '@angular/core';
import {IPosts} from "../../models/IPosts";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input()
  post: IPosts;

  constructor(private router:Router,private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

  }

  goToDetails(): void {
    this.router.navigate(['posts',this.post.id],{state:this.post})
  }
}
