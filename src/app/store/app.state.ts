import { AuthState } from './../login/state/auth.state'
import { counterReducer } from '../counter/state/counter.reducers'
import { CounterState } from '../counter/state/counter.state'
import { postsReducer } from '../posts/state/posts.reducer'
import { PostsState } from '../posts/state/posts.state'
import { AuthReducer } from '../login/state/auth.reducer'

export interface AppState {
	counter: CounterState,
	posts: PostsState,
}

export const appReducer = {
	counter: counterReducer,
	posts: postsReducer,
}
