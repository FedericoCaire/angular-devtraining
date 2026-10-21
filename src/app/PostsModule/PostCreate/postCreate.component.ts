import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Post } from '../../data';
import { postSubmitted } from '../state/posts.actions';

@Component({
  selector: 'app-post-create',
  standalone: false,
  templateUrl: './postCreate.component.html',
})
export class PostCreateComponent {
  private store = inject(Store);
  private router = inject(Router);

  onSave(post: Post): void {
    this.store.dispatch(postSubmitted({ post }));
    this.router.navigate(['/posts/list']);
  }
}
