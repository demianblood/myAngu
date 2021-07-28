import {Component, Input, OnInit} from '@angular/core';
import {IPosts} from "../../models/IPosts";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit{
 @Input()
  post:IPosts
  ngOnInit():void {
  }

}
