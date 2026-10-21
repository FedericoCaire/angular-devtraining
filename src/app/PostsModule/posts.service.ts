import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { POSTS_API_URL } from "./posts-api-url.token";
import { Observable } from "rxjs";
import { Post } from "../data";


@Injectable({ providedIn: 'root' })
export class PostsService {
  private http = inject(HttpClient);
  private apiUrl = inject(POSTS_API_URL);

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }
}
