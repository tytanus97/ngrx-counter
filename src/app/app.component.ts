import { autoLogin } from './login/state/auth.action'
import { AppState } from 'src/app/store/app.state'
import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'ngrx-counter'

	constructor(private readonly store: Store<AppState>) {
	}

	ngOnInit(): void {
		this.store.dispatch(autoLogin())
	}
}
