import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPost } from '../BlogPost';
import { HttpClient } from '@angular/common/http';
const perPage = 6;

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private http: HttpClient) { }
  //a6
  //Fetches all blog posts using the path: YOUR API/api/posts?page=1&perPage=Number.MAX_SAFE_INTEGERwhere "Number.MAX_SAFE_INTEGER" is a constant value of: 253–1(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER).  This will ensure that all of the blog posts are returned using a single AJAX request.
  getAllPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(`https://nameless-brushlands-35883.herokuapp.com/api/posts?page=1&perPage=${Number.MAX_SAFE_INTEGER}`);
  }

  //This function must invoke the "post" method on the injected "http" service with the data parameter as the body of the request, ie:return this.http.post<any>(`YOUR API/api/posts`, data);
  newPost(data: BlogPost): Observable<any> {
    return this.http.post<any>(`https://nameless-brushlands-35883.herokuapp.com/api/posts`,data);
  }

  //his function must invoke the "put" method on the injected "http" service with the data parameter as the body of the request, ie:return this.http.put<any>(`YOUR API/api/posts/${id}`, data);
  updatePostById(id: string, data: BlogPost): Observable<any> {
    return this.http.put<any>(`https://nameless-brushlands-35883.herokuapp.com/api/posts/${id}`, data);
  }


  deletePostById(id: string): Observable<any>{
    return this.http.delete<any>(`https://nameless-brushlands-35883.herokuapp.com/api/posts/${id}`);
  }


  //This method will use HttpClient to return all of the posts available in the blogAPI for a specific page using the path: /api/posts?page=page&perPage=perPagewhere pageis the firstparameter to the function and perPageis the constant defined (above).
  getPosts(page, tag, category): Observable<BlogPost[]> {
    let params = {page: page, perPage: perPage.toString()} //maybe add a , at the end of () like (),}
    if (tag != null || tag != undefined) params["tag"] = tag;
    //IMPORTANT NOTE: The API will not permit you to use "#" in the "tag" parameter, ie: "tag=#scary" will not function, but "tag=scary" will.  Therefore, never invoke this function with a tag value that includes "#".
    if (category != null || category != undefined) params["category"] = category;
    return this.http.get<BlogPost[]>(`https://nameless-brushlands-35883.herokuapp.com/api/posts`,{ params });
  }

  //This method will use HttpClient to return a single post available in the blogAPI for a specific page using the path: /api/posts/idwhere idis the single parameter to the function.
  getPostByID(id): Observable<BlogPost> {
    return this.http.get<BlogPost>(`https://nameless-brushlands-35883.herokuapp.com/api/posts/${id}`);
  }

  //This method will use HttpClient to return an array of "Categories" in the format: {cat: string, num: number} using the path /api/categories (Note: You should recognize this format, as it was theone used in assignment 4 for the "CategoriesComponent" data.)
  getCategories(): Observable<any> {
    return this.http.get<any>(`https://nameless-brushlands-35883.herokuapp.com/api/categories`);
  }
  //This method will use HttpClient to return an array of "Tags" (represented as strings) using the path /api/tags
  getTags(): Observable<string[]> {
    return this.http.get<string[]>(`https://nameless-brushlands-35883.herokuapp.com/api/tags`);
  }
}
