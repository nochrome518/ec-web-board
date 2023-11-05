import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
	public sidebarShow: boolean = false;
	isLoggedIn: boolean = false;

   	constructor(public authService: AuthService) { }

	ngOnInit(): void {
	}

	logout() {
		this.authService.logout()
	}
}
