import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './PostList/postList.component';
import { PostComponent } from './Post/post.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [PostComponent, PostListComponent],
  declarations: [PostComponent, PostListComponent],
})
export class PostsModule {}
