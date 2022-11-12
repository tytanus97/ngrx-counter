import { PostsComponent } from './posts.component'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
	{
		path: '', component: PostsComponent
	}
]

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	]
})
export class PostRoutingModule {
}
