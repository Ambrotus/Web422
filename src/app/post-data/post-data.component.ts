import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogPost } from '../../BlogPost';
import { PostServiceService } from '../post-service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css']
})
export class PostDataComponent implements OnInit, OnDestroy {

  post: BlogPost;
  commentName: string;
  commentText: string;
  query;

  constructor(private data: PostServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.query = this.route.params.subscribe(params =>{
      //TODO: Get post by Id params['id'] and store the result in this.post
      this.data.getPostByID(params['id']).subscribe(data =>{
        this.post = data;
        this.post.views++;
        this.data.updatePostById(this.post._id, this.post).subscribe();
      } );
    })
  }

  ngOnDestroy(){
    if(this.query) this.query.unsubscribe();
  }

  submitComment(){
    this.post.comments.push({
      author: this.commentName,
      comment: this.commentText,
      date: new Date().toLocaleDateString()
    });

    this.data.updatePostById(this.post._id, this.post).subscribe( () => {
      this.commentName = "";
      this.commentText = "";
    });
  }

}
