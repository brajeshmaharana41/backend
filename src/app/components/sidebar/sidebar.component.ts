import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

	@Input() isSidebarOpen: boolean;
	@Output() closeSidebar: EventEmitter<any> = new EventEmitter();
	isLogin: boolean = false;
	fullname: string;
	initials: string;

	constructor(private router: Router) { }

	ngOnInit(): void {
	}

	handleCloseSidebar() {
		this.closeSidebar.emit();
	}

	navigateLink(path: string) {
		this.handleCloseSidebar();
		this.router.navigate([path]);
	}

	notificationClick() {
		// notification logic
	}
}
