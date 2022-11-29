import { MatSnackBarModule } from '@angular/material/snack-bar'
import { PostsModule } from './posts/posts.module'
import { appReducer } from './store/app.state'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { CommonModule } from '@angular/common'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { MatTabsModule } from '@angular/material/tabs'
import { AppTabsComponent } from './app-tabs/app-tabs.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module'
import { CounterModule } from './counter/counter.module'
import { WelcomeComponent } from './welcome/welcome.component'
import { SharedModule } from './shared/shared.module'
import { AuthEffects } from './login/state/auth.effect'

@NgModule({
	declarations: [
		AppComponent,
		AppTabsComponent,
		WelcomeComponent,
	],
	imports: [
		BrowserModule,
		CommonModule,
		MatTabsModule,
		EffectsModule.forRoot([AuthEffects]),
		StoreModule.forRoot(appReducer),
		BrowserAnimationsModule,
		AppRoutingModule,
		CounterModule,
		PostsModule,
		SharedModule,
		MatSnackBarModule

	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
