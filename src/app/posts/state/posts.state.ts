import { Post } from '../utils/post.model'

export interface PostsState {
	postList: Post[]
}


export const INITIAL_STATE: PostsState = {
	postList: [
	{id: '1', description: 'post desc', title: 'post title'}
	]
}

