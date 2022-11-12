import { WelcomeComponent } from './welcome/welcome.component'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
	{
		path: 'home', component: WelcomeComponent,
	},
	{
		path: 'counter',
		loadChildren: () => import('./counter/counter.module').then((m) => m.CounterModule)
	},
	{
		path: 'posts',
		loadChildren: () => import('./posts/posts.module').then((m) => m.PostsModule),
	},
	{
		path: '', pathMatch: 'full', redirectTo: 'home'
	},
	{ path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
]



@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
