import { CounterState } from './counter.state'
import { createFeatureSelector, createSelector } from '@ngrx/store'
export const COUNTER_STATE_NAME = 'counter'

const getCounterState = createFeatureSelector<CounterState>(COUNTER_STATE_NAME)

export const counterValueSelector = createSelector(getCounterState, (state => {
	return state.value
}))
