import { createAction, props } from '@ngrx/store'
import { AuthCredentials } from '../utils/authCredentials'

export const LOGIN_START = '[auth] login start'
export const LOGIN_SUCCESS = '[auth] login success'
export const LOGIN_FAIL = '[auth] login fail'


export const loginStart = createAction(LOGIN_START, props<{credentials: AuthCredentials}>())
export const loginSuccess = createAction(LOGIN_SUCCESS, props<{token: string}>())
export const loginFail = createAction(LOGIN_FAIL)
