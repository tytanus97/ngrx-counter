import { counterValueSelector } from '../../state/counter.selectors'
import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { AppState } from 'src/app/store/app.state'

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.scss']
})
export class CounterDisplayComponent implements OnInit {
  value$!: Observable<number>
  constructor(private readonly store: Store<AppState>) { }

  ngOnInit(): void {
	this.value$ = this.store.select(counterValueSelector)
  }

}
