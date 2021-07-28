import {Component, OnInit} from '@angular/core';
import {IPosts} from "../models/IPosts";
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../services/post.service";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  post: IPosts;

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {

    this.activatedRoute.params.subscribe(({id}) => {

      this.postService.getPostById(id).subscribe(value => this.post = value)
    })
  }

  ngOnInit(): void {
  }

}
