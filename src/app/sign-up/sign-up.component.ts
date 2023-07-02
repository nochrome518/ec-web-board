import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  email: string | undefined;
  password: string | undefined;
  fullName: string | undefined;
  dob: string | undefined;
  phoneNumber: string | undefined;
  startDate = new Date(1990, 0, 1);
  showPopup = false;

  constructor(private authService: AuthService) { 
  }
  
  ngOnInit(): void {
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
				// Handle successful login
			  },
			  error => {
				// Handle login error
			  }
			);
		} else {
			console.log("please fill the required fileds!")
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

