import { Injectable } from '@angular/core'

const USER_TOKEN_LOCAL = 'user_token'

@Injectable({providedIn: 'root'})
export class UserTokenLocalStorageService {

	constructor() {
	}

	persistUserToken(token: string) {
		localStorage.setItem(USER_TOKEN_LOCAL, token)
	}

	getUserToken(): string {
		return localStorage.getItem(USER_TOKEN_LOCAL)
	}

	removeToken(): void {
		localStorage.removeItem(USER_TOKEN_LOCAL)
	}
}
