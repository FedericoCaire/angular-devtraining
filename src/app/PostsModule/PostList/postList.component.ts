import {Component, inject} from '@angular/core';
import { Store } from '@ngrx/store';
import { getPosts } from '../state/posts.selector';

@Component({
  selector: 'app-post-list',
  standalone: false,
  templateUrl: './postList.component.html',
  styleUrls: ['./postList.component.css'],
})
export class PostListComponent {
  private store = inject(Store);
  posts$ = this.store.select(getPosts);
}
