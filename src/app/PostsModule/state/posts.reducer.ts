import { createReducer, on, Action } from '@ngrx/store';
import { Post } from '../../data';
import {
  appInitialized,
  loadPostsSuccess,
  loadPostsFailure,
  postSubmitted,
  refreshButtonClicked
} from './posts.actions';

export const POSTS_STATE_KEY = 'posts';

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

const postsReducer = createReducer(
  initialState,
  on(appInitialized, refreshButtonClicked, state => ({
    ...state,
    loaded: false,
    error: null
  })),
  on(loadPostsSuccess, (state, { posts }) => ({
    ...state,
    posts,
    loaded: true
  })),
  on(loadPostsFailure, (state, { error }) => ({
    ...state,
    loaded: true,
    error
  })),
  on(postSubmitted, (state, { post }) => ({
    ...state,
    posts: [post, ...state.posts]
  }))
);

export function reducer(state: PostState | undefined, action: Action) {
  return postsReducer(state, action);
}
