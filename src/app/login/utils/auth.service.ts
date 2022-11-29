import { Injectable } from '@angular/core'
import { AuthCredentials } from './authCredentials'
import { AuthCredentialsChecker } from './authCredentialsChecker'
const LOGIN_DELAY = 5000

@Injectable({providedIn: 'root'})
export class AuthService {

	constructor(private readonly authCredentialsChecker: AuthCredentialsChecker) {}

	doLogin(credentials: AuthCredentials) {
		return new Promise<string>((resolve, reject) => {
			setTimeout(() => {
				try {
					const token = this.authCredentialsChecker.checkCredentials(credentials)
					resolve(token)
				} catch (e) {
					reject(e)
				}
			}, LOGIN_DELAY)
		})
	}
}



