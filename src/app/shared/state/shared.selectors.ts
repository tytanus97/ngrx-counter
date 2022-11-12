import { createFeatureSelector, createSelector } from '@ngrx/store'
import { SharedState } from './shared.state'
export const SHARED_STATE_NAME = 'shared'

const getSharedStateSelector = createFeatureSelector<SharedState>(SHARED_STATE_NAME)

export const getLoading = createSelector(getSharedStateSelector, (state) => {
	return state.showLoading
})
