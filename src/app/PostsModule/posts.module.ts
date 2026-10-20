import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './PostList/postList.component';
import { PostComponent } from './Post/post.component';
import { PostFormComponent } from './PostForm/postForm.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { PostsRoutingModule } from './posts-routing.module';


@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, PostsRoutingModule,
    MatFormFieldModule, MatInputModule, MatButtonModule, MatDatepickerModule],
  exports: [PostComponent, PostListComponent, PostFormComponent],
  providers: [provideNativeDateAdapter()],
  declarations: [PostComponent, PostListComponent, PostFormComponent],
})
export class PostsModule {}
