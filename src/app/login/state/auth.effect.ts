import { AuthService } from './../utils/auth.service'
import { loginStart, loginSuccess } from './auth.action'
import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { defer, exhaustMap, from, map } from 'rxjs'

@Injectable()
export class AuthEffects {
	constructor(private readonly actions$: Actions,
		private readonly authService: AuthService) {
	}

	login$ = createEffect(() => {
		return this.actions$.pipe(ofType(loginStart),
		exhaustMap((action) => {
			return from(this.authService.doLogin(action.credentials)).pipe(
				map(token => {
				return loginSuccess({token})
			}))
		}))
	})
}
