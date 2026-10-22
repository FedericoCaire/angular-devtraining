import { Component, inject } from '@angular/core';
import { PostsStore } from './PostsModule/posts.store';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private postsStore = inject(PostsStore);
  title = 'angular-practice';
  postsCount$ = this.postsStore.count$;

  constructor() {
    this.postsStore.loadPosts();
  }
}
