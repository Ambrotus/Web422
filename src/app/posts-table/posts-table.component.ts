import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../post-service.service';
import { Router } from '@angular/router';
import { BlogPost } from 'src/BlogPost';

@Component({
  selector: 'app-posts-table',
  templateUrl: './posts-table.component.html',
  styleUrls: ['./posts-table.component.css']
})
export class PostsTableComponent implements OnInit {

  blogPosts: Array<BlogPost>;
  posts;
  constructor(private data: PostServiceService, private router: Router) { }

  ngOnInit(): void {                                        //might need to remove {}
    this.posts = this.data.getAllPosts().subscribe( data => {this.blogPosts = data});
  }

  rowClicked(e, id){
    this.router.navigate(['/admin/post', id]);
  }

}
