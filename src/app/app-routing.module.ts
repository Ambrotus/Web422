import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './post/post.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { PostsTableComponent } from './posts-table/posts-table.component';
import { NewPostComponent } from './new-post/new-post.component';

//https://web422.ca/notes/angular-routing
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'post/:id', component: PostComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'admin', component: PostsTableComponent },
  {path: 'admin/post/:id', component: EditPostComponent },
  {path: 'admin/newPost', component: NewPostComponent},
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],//, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
