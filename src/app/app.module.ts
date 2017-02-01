import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { BreadcrumbsComponent } from './shared/breadcrumbs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';
import { SidebarComponentComponent } from './layout/sidebar-component/sidebar-component.component';

@NgModule({
	declarations: [
		AppComponent,
		BreadcrumbsComponent,
		SIDEBAR_TOGGLE_DIRECTIVES,
		NAV_DROPDOWN_DIRECTIVES,
		SidebarComponentComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }