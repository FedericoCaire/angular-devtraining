import { Injectable, InjectionToken, inject} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { POSTS_API_URL } from "./posts-api-url.token";
import { BehaviorSubject, Observable } from "rxjs";
import { Post } from "../data";


@Injectable({ providedIn: 'root' })
export class PostService {
  private http = inject(HttpClient);
  private apiUrl = inject(POSTS_API_URL);
  private postsSubject = new BehaviorSubject<Post[]>([]);
  posts$: Observable<Post[]> = this.postsSubject.asObservable();

  private loaded = false;

  loadPosts(): void {
    if (this.loaded) return;
    this.loaded = true;
    this.http.get<Post[]>(this.apiUrl).subscribe((posts) => this.postsSubject.next(posts));
  }
  addPost(post: Post): void {
    this.postsSubject.next([post, ...this.postsSubject.value]);
  }
 
  updatePost(original: Post, updated: Post): void {
    this.postsSubject.next(
      this.postsSubject.value.map((p) => (p === original ? updated : p))
    );
  }
}