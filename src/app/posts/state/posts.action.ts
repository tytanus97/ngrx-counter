import { createAction, props } from '@ngrx/store'
import { Post } from '../utils/post.model'


const ADD_POST_ACTION = 'add post'

export const addPostAction = createAction(ADD_POST_ACTION, props<{post: Post}>())
