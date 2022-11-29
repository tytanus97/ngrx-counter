import { EffectsModule } from '@ngrx/effects'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { LoginRoutingModule } from './login-routing.module'
import { LoginComponent } from './login.component'
import { ReactiveFormsModule } from '@angular/forms'
import { AuthService } from './utils/auth.service'
import { AuthCredentialsChecker } from './utils/authCredentialsChecker'
import { UserTokenLocalStorageService } from './utils/userTokenLocalStorage.service'


@NgModule({
	declarations: [
		LoginComponent
	],
	imports: [
		CommonModule,
		LoginRoutingModule,
		ReactiveFormsModule,
		EffectsModule.forFeature()
	],
	providers: [

	]
})
export class LoginModule { }
