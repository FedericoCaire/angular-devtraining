import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { appInitialized } from './state/app.actions';
import { getPostsCount } from './PostsModule/state/posts.selector';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private store = inject(Store);
  title = 'angular-practice';
  postsCount$ = this.store.select(getPostsCount);

  constructor() {
    this.store.dispatch(appInitialized());
  }
}
