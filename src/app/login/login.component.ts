import { loginStart } from './state/auth.action'
import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AppState } from '../store/app.state'
import { AuthCredentials } from './utils/authCredentials'
import { Store } from '@ngrx/store'
import { setLoadingSpinner } from '../shared/state/shared.actions'

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	loginForm!: FormGroup
	constructor(private readonly store: Store<AppState>) { }

	ngOnInit(): void {

		this.loginForm = new FormGroup({
			login: new FormControl(null, [Validators.required]),
			password: new FormControl(null, [Validators.required])
		})
	}

	submitLogin() {

		const login = this.loginForm.get('login').value
		const password = this.loginForm.get('password').value

		const credentials = {
			login,
			password
		} as AuthCredentials

		this.store.dispatch(setLoadingSpinner({status: true}))
		this.store.dispatch(loginStart({credentials}))
	}

	get loginControl() {
		return this.loginForm.get('login')
	}

	get passwordControl() {
		return this.loginForm.get('password')
	}

}
