import { sharedReducer } from '../shared/state/shared.reducer'
import { SHARED_STATE_NAME } from './../shared/state/shared.selectors'
import { SharedState } from './../shared/state/shared.state'

export interface AppState {
	[SHARED_STATE_NAME]: SharedState
}

export const appReducer = {
	[SHARED_STATE_NAME]: sharedReducer
}
