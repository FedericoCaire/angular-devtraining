import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../../data';
import { PostsStore } from '../posts.store';

@Component({
  selector: 'app-post-create',
  standalone: false,
  templateUrl: './postCreate.component.html',
})
export class PostCreateComponent {
  private postsStore = inject(PostsStore);
  private router = inject(Router);

  onSave(post: Post): void {
    this.postsStore.addPost(post);
    this.router.navigate(['/posts/list']);
  }
}
