import {Component, inject} from '@angular/core';
import { PostService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  standalone: false,
  templateUrl: './postList.component.html',
  styleUrls: ['./postList.component.css'],
})
export class PostListComponent {
  private postService = inject(PostService);
  posts$ = this.postService.posts$;

  constructor() {
    this.postService.loadPosts();
  }
}