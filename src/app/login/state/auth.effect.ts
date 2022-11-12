import { setLoadingSpinner } from './../../shared/state/shared.actions'
import { AuthService } from './../utils/auth.service'
import { loginStart, loginSuccess } from './auth.action'
import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { exhaustMap, from, map } from 'rxjs'
import { AppState } from 'src/app/store/app.state'
import { Store } from '@ngrx/store'

@Injectable()
export class AuthEffects {
	constructor(private readonly actions$: Actions,
		private readonly authService: AuthService,
		private readonly store: Store<AppState>) {
	}

	login$ = createEffect(() => {
		return this.actions$.pipe(ofType(loginStart),
		exhaustMap((action) => {
			return from(this.authService.doLogin(action.credentials)).pipe(
				map(token => {
				this.store.dispatch(setLoadingSpinner({status: false}))
				return loginSuccess({token})
			}))
		}))
	})
}
