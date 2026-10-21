import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, delay, map, switchMap } from 'rxjs/operators';
import { PostsService } from '../posts.service';
import {
  loadPostsFailure,
  loadPostsSuccess,
  refreshButtonClicked
} from './posts.actions';
import { appInitialized } from '../../state/app.actions';

@Injectable()
export class PostsEffects {
  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appInitialized, refreshButtonClicked),
      delay(3000),
      switchMap(() =>
        this.postsService
          .getAllPosts()
          .pipe(
            map(posts => loadPostsSuccess({ posts })),
            catchError(error => of(loadPostsFailure({ error })))
          )
      )
    )
  );

  constructor(private actions$: Actions, private postsService: PostsService) {}
}
