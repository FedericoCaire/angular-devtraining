import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './PostList/postList.component';
import { PostCreateComponent } from './PostCreate/postCreate.component';

const routes: Routes = [
  {
    path: 'list',
    component: PostListComponent,
  },
  {
    path: 'create',
    component: PostCreateComponent,
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
