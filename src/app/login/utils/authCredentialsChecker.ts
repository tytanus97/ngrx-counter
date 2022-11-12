import { Injectable } from '@angular/core'
import { v4 } from 'uuid'
import { AuthCredentials } from './authCredentials'

@Injectable()
export class AuthCredentialsChecker {
	/**
	 * returns user token
	 * @param credentials
	 */
	checkCredentials(credentials: AuthCredentials): string {
		console.log('check credits')

		const user: UserCredentials = availableCredentials.find((credits: UserCredentials) => {
			return credits.login.includes(credentials.login)
		})

		if (user) {
			return user.token
		}

		throw Error('Invalid credentials')
	}

}

const availableCredentials: UserCredentials[] = [
	{
		login: ['pawel', 'tytanus97@gmail.com', '570053247'],
		password: 'pawel',
		token: v4()
	},
]

export interface UserCredentials {
	login: string[],
	password: string,
	token: string
}
