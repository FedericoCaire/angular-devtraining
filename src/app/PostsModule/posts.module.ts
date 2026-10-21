import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './PostList/postList.component';
import { PostComponent } from './Post/post.component';
import { PostFormComponent } from './PostForm/postForm.component';
import { PostCreateComponent } from './PostCreate/postCreate.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { PostsRoutingModule } from './posts-routing.module';
import { StoreModule } from "@ngrx/store";
import {
  POSTS_STATE_KEY,
  reducer as postsReducer
} from "./state/posts.reducer";
import { EffectsModule } from "@ngrx/effects";
import { PostsEffects } from "./state/posts.effects";

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, PostsRoutingModule,
    MatFormFieldModule, MatInputModule, MatButtonModule, MatDatepickerModule,
    StoreModule.forFeature(POSTS_STATE_KEY, postsReducer),
    EffectsModule.forFeature([PostsEffects])],
  exports: [PostComponent, PostListComponent, PostFormComponent],
  providers: [provideNativeDateAdapter()],
  declarations: [PostComponent, PostListComponent, PostFormComponent, PostCreateComponent],
})
export class PostsModule {}
