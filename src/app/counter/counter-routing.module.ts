import { CounterComponent } from './counter.component'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'


const routes: Routes = [
	{
		path: '', component: CounterComponent
	}
]

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	]
})
export class CounterRoutingModule {
}
