import { AuthState } from './../login/state/auth.state'
import { AUTH_STATE_NAME } from './../login/state/auth.selector'
import { sharedReducer } from '../shared/state/shared.reducer'
import { SHARED_STATE_NAME } from './../shared/state/shared.selectors'
import { SharedState } from './../shared/state/shared.state'
import { AuthReducer } from '../login/state/auth.reducer'

export interface AppState {
	[SHARED_STATE_NAME]: SharedState,
	[AUTH_STATE_NAME]: AuthState
}

export const appReducer = {
	[SHARED_STATE_NAME]: sharedReducer,
	[AUTH_STATE_NAME]: AuthReducer
}
