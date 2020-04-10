import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../../BlogPost';
//It must receive a single property post.
//The type of this property will be BlogPost(therefore, { BlogPost } must be imported from '../BlogPost'
//and the @Input() decorator must also be used.
//Do not forget to import "Input" from @angular/core
@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {
//and the @Input() decorator must also be used.
//Do not forget to import "Input" from @angular/core
  @Input() post :BlogPost;
  constructor() { }

  ngOnInit(): void {
  }

}
