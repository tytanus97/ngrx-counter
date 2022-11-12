import { loginSuccess } from './auth.action'

import { createReducer, on } from '@ngrx/store'
import { INITIAL_STATE } from './auth.state'

const _authReducer = createReducer(INITIAL_STATE,
	on(loginSuccess, (state, action) => {
		return {
			...state,
			token: action.token
		}
	}))

export function AuthReducer(state, action) {
	return _authReducer(state, action)
}
