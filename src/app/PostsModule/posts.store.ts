import { Injectable, inject } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { tapResponse } from '@ngrx/operators';
import { delay, switchMap, tap, } from 'rxjs/operators';
import { Post } from '../data';
import { PostsService } from './posts.service';

export interface PostState {
  posts: Post[];
  loaded: boolean;
  error: any;
}

export const initialState: PostState = {
  posts: [],
  loaded: false,
  error: null
};

@Injectable()
export class PostsStore extends ComponentStore<PostState> {
  private postsService = inject(PostsService);

  constructor() {
    super(initialState);
  }

  readonly posts$ = this.select(state => state.posts);

  readonly loaded$ = this.select(state => state.loaded);

  readonly count$ = this.select(this.posts$, posts => posts.length);

  readonly addPost = this.updater((state, post: Post) => ({
    ...state,
    posts: [post, ...state.posts]
  }));

  readonly loadPosts = this.effect<void>(trigger$ =>
    trigger$.pipe(
      tap(() => this.patchState({ loaded: false, error: null })),
      delay(3000),
      switchMap(() =>
        this.postsService.getAllPosts().pipe(
          tapResponse(
            posts => this.patchState({ posts, loaded: true }),
            error => this.patchState({ error, loaded: true })
          )
        )
      )
    )
  );
}
