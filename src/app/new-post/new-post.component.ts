import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../post-service.service';
import { Router } from '@angular/router';
import { BlogPost } from 'src/BlogPost';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  //Create a new property "blogPost" of type "BlogPost" with a default value of new BlogPost();
  blogPost: BlogPost = new BlogPost();
  tags: string;
  constructor(private data: PostServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  //Create a "formSubmit()" method and ensure that it's executed when the form is submitted.  This function must adhere to the following specifications:
  //wants its specifically called formSubmit()
  formSubmit(){
    //this can be done using the code: this.tags.split(",").map(tag => tag.trim());// convert the string to an array and remove whitespace
    this.blogPost.tags = this.tags.split(',').map(tag => tag.trim());
    this.blogPost.isPrivate = false;
    this.blogPost.postDate = new Date().toLocaleDateString();
    this.blogPost.postedBy = 'WEB422 Student';
    this.blogPost.views = 0;
    this.data.newPost(this.blogPost).subscribe( () => this.router.navigate(['/admin']));
  }

}
