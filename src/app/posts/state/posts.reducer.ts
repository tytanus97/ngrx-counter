import { addPostAction } from './posts.action'
import { Action, createReducer, on } from '@ngrx/store'
import { INITIAL_STATE, PostsState } from './posts.state'

const _postsReducer = createReducer(INITIAL_STATE,
	on(addPostAction, (state: PostsState, action) => {
		return {
		...state,
		posts: [...state.postList,  action.post]
		}
		})
	)

export function postsReducer(state: PostsState | undefined, action: Action) {
	return _postsReducer(state, action)
}
