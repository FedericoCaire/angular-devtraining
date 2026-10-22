import {Component, inject} from '@angular/core';
import { PostsStore } from '../posts.store';

@Component({
  selector: 'app-post-list',
  standalone: false,
  templateUrl: './postList.component.html',
  styleUrls: ['./postList.component.css'],
})
export class PostListComponent {
  private postsStore = inject(PostsStore);
  posts$ = this.postsStore.posts$;
}
