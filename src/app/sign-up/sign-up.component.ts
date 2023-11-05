import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Messages, Titles } from '../constants/messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  email: string | undefined;
  password: string | undefined;
  fullName: string | undefined;
  dob: string | undefined;
  phoneNumber: string | undefined;
  startDate = new Date(1990, 0, 1);
  showPopup = false;
  message = '';
  title = '';
  constructor(private authService: AuthService, private router: Router) { 
  }

  signup() {
		let userData = {
			email: this.email,
			password: this.password,
			fullName: this.fullName,
			dob: this.dob,
			phoneNumber: this.phoneNumber,
		}

		if(this.email && this.password && this.fullName && this.dob){
			this.authService.signup(userData)
			.subscribe(
				response => {
					console.log(response)
					this.title = Titles.SUCCESS;
					this.message = response.message;
					// this.router.navigate(['/login']);
					this.openPopup();
				},
				error => {
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
		this.router.navigate(['/home']);
	}
	
	closePopup() {
		this.showPopup = false;
		this.router.navigate(['/signup']);
	}
}

