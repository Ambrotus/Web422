import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../../BlogPost';
import { PostServiceService } from "../post-service.service";
@Component({
  selector: 'app-footer-posts-componen',
  templateUrl: './footer-posts-componen.component.html',
  styleUrls: ['./footer-posts-componen.component.css']
})
export class FooterPostsComponenComponent implements OnInit {

  blogPosts: Array<BlogPost>;
  private posts;
  constructor(private data: PostServiceService) { }

  ngOnInit(): void {
    //add logic to populate the "posts" array using the "PostService" getPosts(1, null, null) function.  However, make sure that you only grab the first 3 results.  This can be done by once again using the .slice(0,3) method on the returned array
    this.posts = this.data.getPosts(1,null,null).subscribe(data => this.blogPosts = data.slice(0,3));
  }
}





