import { StoreModule } from '@ngrx/store'
import { MatButtonModule } from '@angular/material/button'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { CounterComponent } from './counter.component'
import { CounterButtonsComponent } from './ui/counter-buttons/counter-buttons.component'
import { CounterDisplayComponent } from './ui/counter-display/counter-display.component'
import { CounterRoutingModule } from './counter-routing.module'
import { COUNTER_STATE_NAME } from './state/counter.selectors'
import { counterReducer } from './state/counter.reducers'


@NgModule({
	declarations: [
		CounterComponent,
		CounterDisplayComponent,
		CounterButtonsComponent
	],
	imports: [
		CommonModule,
		MatButtonModule,
		CounterRoutingModule,
		StoreModule.forFeature(COUNTER_STATE_NAME, counterReducer)
	]
})
export class CounterModule {

	constructor() {
	}
}
