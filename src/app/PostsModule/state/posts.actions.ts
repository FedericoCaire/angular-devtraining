import { createAction, props } from '@ngrx/store';
import { Post } from '../../data';

export const appInitialized = createAction('[App] app initialized');

export const refreshButtonClicked = createAction(
  '[Post list] refresh button clicked'
);

export const postSubmitted = createAction(
  '[Post create] post submitted',
  props<{ post: Post }>()
);

export const loadPostsSuccess = createAction(
  '[Posts API] load posts success',
  props<{ posts: Post[] }>()
);

export const loadPostsFailure = createAction(
  '[Posts API] load posts failure',
  props<{ error: any }>()
);
