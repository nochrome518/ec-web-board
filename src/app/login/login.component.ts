import { Component, Injectable, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Messages, Titles } from '../constants/messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  	email: string | undefined;
  	password: string | undefined;
  	showPopup = false;
	message = '';
	title = '';
	token = '';
	loggedIn: boolean = false;

 	constructor(private authService: AuthService, private router: Router) { }

	login() {
		if(this.email && this.password){
			this.authService.login(this.email, this.password)
			.subscribe(
				response => {
					console.log(response)
					this.token = response.data.accessToken;
					localStorage.setItem('jwtToken', this.token);
					this.title = Titles.SUCCESS;
					this.message = Messages.LOGIN_SUCCESS;
					// this.router.navigate(['/home']);
					this.authService.LoggedIn();
					this.openPopup()

				},
				error => {
					console.log(error);
					this.title = Titles.WARNING;
					this.message = error.error.message;
					this.openPopup()
				}
			);
		} else {
			this.title = Titles.WARNING;
			this.message = Messages.FILL_REQ_FILED;
			this.openPopup();
		}
	}

	openPopup() {
		this.showPopup = true;
		this.router.navigate(['/home'])
	}

	closePopup() {
		this.showPopup = false;
		this.router.navigate(['/login']);
	}
}
