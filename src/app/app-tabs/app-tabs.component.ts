import { isAuthenticated } from './../login/state/auth.selector'
import { Component, OnInit } from '@angular/core'
import { Route, Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { map, Observable } from 'rxjs'
import { AppState } from '../store/app.state'

@Component({
	selector: 'app-app-tabs',
	templateUrl: './app-tabs.component.html',
	styleUrls: ['./app-tabs.component.scss']
})
export class AppTabsComponent implements OnInit {
	routes$: Observable<Route[]>

	constructor(private readonly router: Router,
		private readonly store: Store<AppState>) {
	}

	ngOnInit(): void {
		this.routes$ = this.store.select(isAuthenticated).pipe(map(isAuth => {
			return this.router.config.filter(route => {
				if (route.path && route.path.length) {
					return route.path === 'login' ? !isAuth : true
				}
				return false
			})
		}))
	}
}
