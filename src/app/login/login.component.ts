import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  	username: string | undefined;
  	password: string | undefined;
  	showPopup = false;

 	 constructor(private authService: AuthService) { }

	login() {
		if(this.username && this.password){
			this.authService.login(this.username, this.password)
			.subscribe(
				response => {
				// Handle successful login
				},
				error => {
				// Handle login error
				}
			);
		} else {
			this.openPopup()
		}
	}


	openPopup() {
		this.showPopup = true;
	}

	closePopup() {
		this.showPopup = false;
	}
}
