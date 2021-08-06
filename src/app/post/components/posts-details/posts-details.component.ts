import {Component, OnInit} from '@angular/core';
import {IPosts} from "../../../../models/IPosts";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../user/services-user/user.service";
import {PostService} from "../../services-post/post.service";

@Component({
  selector: 'app-posts-details',
  templateUrl: './posts-details.component.html',
  styleUrls: ['./posts-details.component.scss']
})
export class PostsDetailsComponent implements OnInit {
  post: IPosts;

  constructor(private activatedRoute: ActivatedRoute, private postService:PostService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.postService.getPostById(id).subscribe(value => this.post = value)
    })

  }

}
