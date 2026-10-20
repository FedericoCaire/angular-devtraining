import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './PostList/postList.component';
import { PostFormComponent } from './PostForm/postForm.component';

const routes: Routes = [
  {
    path: 'list',
    component: PostListComponent,
  },
  {
    path: 'create',
    component: PostFormComponent,
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
