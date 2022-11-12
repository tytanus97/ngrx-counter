import { Component, OnInit } from '@angular/core'
import { Route, Router, Routes } from '@angular/router'

@Component({
	selector: 'app-app-tabs',
	templateUrl: './app-tabs.component.html',
	styleUrls: ['./app-tabs.component.scss']
})
export class AppTabsComponent implements OnInit {
	routes: Routes = []

	constructor(private readonly router: Router) { }

	ngOnInit(): void {
		this.routes = this.router.config.filter((route: Route) => route.path)
	}

}
