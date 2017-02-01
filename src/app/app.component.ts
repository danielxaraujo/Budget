import { Component } from '@angular/core';

@Component({
	selector: 'body',
	templateUrl: './app.component.html'
})
export class AppComponent {

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
}