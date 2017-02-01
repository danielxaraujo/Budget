import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Component({
	selector: 'body',
	templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

	public disabled: boolean = false;
    public status: { isopen: boolean } = { isopen: false };

    public toggled(open: boolean): void {
		console.log('Dropdown is now: ', open);
    }

    public toggleDropdown($event: MouseEvent): void {
		$event.preventDefault();
		$event.stopPropagation();
		this.status.isopen = !this.status.isopen;
    }

	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private titleService: Title
    ) { }

	ngOnInit() {
		this.router.events
			.filter(event => event instanceof NavigationEnd)
			.map(() => this.activatedRoute)
			.map(route => {
				while (route.firstChild) route = route.firstChild;
				return route;
			})
			.filter(route => route.outlet === 'primary')
			.mergeMap(route => route.data)
			.subscribe((event) => this.titleService.setTitle(event['title']));
	}
}