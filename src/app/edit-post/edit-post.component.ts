import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../post-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPost } from 'src/BlogPost';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  blogPost: BlogPost;
  tags: string;
  post;
  constructor(private data: PostServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.post = this.data.getPostByID(this.route.snapshot.params['id']).subscribe(data => {
      this.blogPost = data;
      this.tags = this.blogPost.tags.toString();
    })
  }

  onSubmit(): void {
    this.blogPost.tags = this.tags.split(",").map(tag => tag.trim());// convert the string to an array and remove whitespace
    this.data.updatePostById(this.blogPost._id, this.blogPost).subscribe(() => this.router.navigate(['/admin'])); //Once this method has completed, use the "router" service to redirect to the "/admin route using the "navigate" method, ie: navigate(['admin'])
  }

  //invoke the "deletePostId(id)" method of the PostService using the value of blogPost._id. Once this method has completed, use the "router" service to redirect to the "/admin route using the "navigate" method, ie: navigate(['admin']);
  deletePost(id){
    this.data.deletePostById(id).subscribe( ()=> this.router.navigate(['admin']));
  }

}
