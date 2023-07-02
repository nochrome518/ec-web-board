import { Component } from '@angular/core';
import 'bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ec-app';
  showPopup = false;
  
  openPopup() {
		this.showPopup = true;
	}
	
	closePopup() {
		this.showPopup = false;
	}
}
