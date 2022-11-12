import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { AppState } from 'src/app/store/app.state'
import { decrementAction, incrementAction, resetAction } from '../../state/counter.actions'

@Component({
	selector: 'app-counter-buttons',
	templateUrl: './counter-buttons.component.html',
	styleUrls: ['./counter-buttons.component.scss']
})
export class CounterButtonsComponent {
	constructor(private readonly store: Store<AppState>) { }

	increment() {
		this.store.dispatch(incrementAction())
	}
	decrement() {
		this.store.dispatch(decrementAction())

	}
	reset() {
		this.store.dispatch(resetAction())
	}
}
