import { Post } from './../../utils/post.model'
import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Store } from '@ngrx/store'
import { getPosts } from '../../state/posts.selector'
import { AppState } from 'src/app/store/app.state'

@Component({
  selector: 'app-posts-table',
  templateUrl: './posts-table.component.html',
  styleUrls: ['./posts-table.component.scss']
})
export class PostsTableComponent implements OnInit {
	displayedColumns = ['id', 'title', 'description']
  posts$!: Observable<Post[]>
  constructor(private readonly store: Store<AppState>) { }

  ngOnInit(): void {
	this.posts$ = this.store.select(getPosts)
  }

}
