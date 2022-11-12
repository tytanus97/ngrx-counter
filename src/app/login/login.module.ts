import { AuthEffects } from './state/auth.effect'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { LoginRoutingModule } from './login-routing.module'
import { LoginComponent } from './login.component'
import { ReactiveFormsModule } from '@angular/forms'
import { AUTH_STATE_NAME } from './state/auth.selector'
import { AuthReducer } from './state/auth.reducer'
import { AuthService } from './utils/auth.service'
import { AuthCredentialsChecker } from './utils/authCredentialsChecker'


@NgModule({
	declarations: [
		LoginComponent
	],
	imports: [
		CommonModule,
		LoginRoutingModule,
		ReactiveFormsModule,
		StoreModule.forFeature(AUTH_STATE_NAME, AuthReducer),
		EffectsModule.forFeature([AuthEffects])
	],
	providers: [
		AuthService,
		AuthCredentialsChecker
	]
})
export class LoginModule { }
