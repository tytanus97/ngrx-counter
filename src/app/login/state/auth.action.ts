import { createAction, props } from '@ngrx/store'
import { AuthCredentials } from '../utils/authCredentials'

export const LOGIN_START = '[auth] login start'
export const LOGIN_SUCCESS = '[auth] login success'
export const LOGIN_FAIL = '[auth] login fail'
export const LOGIN_AUTO = '[auth] login auto'
export const LOGIN_AUTO_FAIL = '[auth] auto login fail'
export const LOGOUT = '[auth] logout'

export const loginStart = createAction(LOGIN_START, props<{credentials: AuthCredentials}>())
export const loginSuccess = createAction(LOGIN_SUCCESS, props<{token: string}>())
export const loginFail = createAction(LOGIN_FAIL)
export const autoLogin = createAction(LOGIN_AUTO)
export const autoLoginFail = createAction(LOGIN_AUTO_FAIL)
export const logout = createAction(LOGOUT)
