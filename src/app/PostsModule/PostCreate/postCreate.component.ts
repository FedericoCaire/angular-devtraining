import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../../data';
import { PostService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  standalone: false,
  templateUrl: './postCreate.component.html',
})
export class PostCreateComponent {
  private postService = inject(PostService);
  private router = inject(Router);

  onSave(post: Post): void {
    this.postService.addPost(post);
    this.router.navigate(['/posts/list']);
  }
}
