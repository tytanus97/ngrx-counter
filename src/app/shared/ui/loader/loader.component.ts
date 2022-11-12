import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { AppState } from 'src/app/store/app.state'
import { getLoading } from '../../state/shared.selectors'

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  showLoading$: Observable<boolean>

  constructor(private readonly store: Store<AppState>) { }

  ngOnInit(): void {
	this.showLoading$ = this.store.select(getLoading)
  }

}
