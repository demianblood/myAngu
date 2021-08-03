import {Component, OnInit} from '@angular/core';
import {IPosts} from "../../models/IPosts";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  post: IPosts;

  constructor(private router:Router,private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {
      this.post=this.router.getCurrentNavigation()?.extras.state as IPosts;
    })
  }

  ngOnInit(): void {
  }

}
