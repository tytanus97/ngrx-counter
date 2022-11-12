export interface AuthState {
	token: string
}

export const INITIAL_STATE = {
	token: null
} as AuthState
