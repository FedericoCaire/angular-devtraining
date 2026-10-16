import {Component} from '@angular/core';
import {Post, POSTS} from '../../data';

@Component({
  selector: 'app-post-list',
  standalone: false,
  templateUrl: './postList.component.html',
  styleUrls: ['./postList.component.css'],
})
export class PostListComponent {
  posts: Post[] = POSTS;
}