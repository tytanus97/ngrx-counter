import { StoreModule } from '@ngrx/store'
import { PostRoutingModule } from './posts-routing.module'
import { NgModule } from '@angular/core'
import { PostsComponent } from './posts.component'
import { PostsTableComponent } from './ui/posts-table/posts-table.component'
import { CommonModule } from '@angular/common'
import { MatTableModule } from '@angular/material/table'
import { postsReducer } from './state/posts.reducer'
import { POST_STATE_NAME } from './state/posts.selector'

@NgModule({
	declarations: [
		PostsComponent,
		PostsTableComponent
	],
	imports: [
		CommonModule,
		PostRoutingModule,
		MatTableModule,
		StoreModule.forFeature(POST_STATE_NAME, postsReducer)
	]
})
export class PostsModule {

	constructor() {
	}
}
