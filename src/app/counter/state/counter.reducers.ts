import { decrementAction, incrementAction, resetAction } from './counter.actions'
import { CounterState, INITIAL_STATE } from './counter.state'
import { Action, createReducer, on } from '@ngrx/store'

const _counterReducer = createReducer(INITIAL_STATE,
	on(incrementAction, (state) => {
		return {
			...state,
			value: state.value + 1
		}
	}),
	on(decrementAction, (state) => {
		return {
			...state,
			value: state.value - 1
		}
	}),
	on(resetAction, (state) => {
		return {
			...state,
			value: 0
		}
	})
)

export function counterReducer(state: CounterState | undefined, action: Action) {
	return _counterReducer(state, action)
}
