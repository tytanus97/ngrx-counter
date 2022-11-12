import { setLoadingSpinner } from './../../shared/state/shared.actions'
import { AuthService } from './../utils/auth.service'
import { loginFail, loginStart, loginSuccess } from './auth.action'
import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, exhaustMap, finalize, from, map, of, tap } from 'rxjs'
import { AppState } from 'src/app/store/app.state'
import { Store } from '@ngrx/store'
import { MatSnackBar } from '@angular/material/snack-bar'
import { Router } from '@angular/router'

@Injectable()
export class AuthEffects {
	constructor(
		private readonly actions$: Actions,
		private readonly authService: AuthService,
		private readonly store: Store<AppState>,
		private readonly _snackBar: MatSnackBar,
		private readonly router: Router) {
	}

	login$ = createEffect(() => {
		return this.actions$.pipe(ofType(loginStart),
			exhaustMap((action) => {
				return from(this.authService.doLogin(action.credentials)).pipe(
					map(token => {
						this._snackBar.open('Login success', null, { duration: 5000 })
						return loginSuccess({ token })
					}),
					catchError(error => {
						this._snackBar.open(error.message, null, { duration: 5000 })
						return of(loginFail())
					}),
					finalize(() => {
						this.store.dispatch(setLoadingSpinner({ status: false }))
					})
				)
			}))
	})

	loginRedirect$ = createEffect(() => {
		return this.actions$.pipe(ofType(loginSuccess),
			tap((action) => {
				this.router.navigate(['/'])
			}))
	}, {dispatch: false})
}
