import { setLoadingSpinner } from './shared.actions'
import { createReducer, on } from '@ngrx/store'
import { INITIAL_STATE } from './shared.state'

const _sharedReducer = createReducer(INITIAL_STATE,
	on(setLoadingSpinner, (state, action) => {
		return {
			...state,
			showLoading: action.status
		}
	})
	)

export function sharedReducer(state, action) {
	return _sharedReducer(state, action)
}
