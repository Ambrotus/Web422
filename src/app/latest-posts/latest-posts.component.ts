import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../../BlogPost';
import { PostServiceService } from "../post-service.service";
// It must receive a single property posts.
//The type of this property will be Array<BlogPost>(therefore, { BlogPost } must be imported from '../BlogPost'
//and the @Input() decorator must also be used.
//Do not forget to import "Input" from @angular/core
@Component({
  selector: 'app-latest-posts',
  templateUrl: './latest-posts.component.html',
  styleUrls: ['./latest-posts.component.css']
})
export class LatestPostsComponent implements OnInit {
  blogPosts: Array<BlogPost>;
  posts;
  constructor(private data: PostServiceService) { }

  ngOnInit(): void {
    //add logic to populate the "posts" array using the "PostService" getPosts(1, null, null) function.  However, make sure that you only grab the first 3 results.  This can be done by once again using the .slice(0,3) method on the returned array
    this.posts = this.data.getPosts(1,null,null).subscribe(data => this.blogPosts = data.slice(0,3));
  }

}
