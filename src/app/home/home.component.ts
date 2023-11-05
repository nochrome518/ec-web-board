import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BackendSuccessResponseWithData } from '../model/response-data';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	productList: any// Observable<BackendSuccessResponseWithData> 
	constructor(private http: HttpClient) { }
	ngOnInit() {
	}

}
