import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from '../../environments/environment';
import { Observable } from "rxjs";
import { BackendSuccessResponseWithData, BackendSuccessResponseWithoutData } from '../model/response-data'
import { Router } from "@angular/router";
import { Messages } from "../constants/messages";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn: boolean = false;
  message: string | undefined
  
  constructor(private http: HttpClient,  private router: Router) { }

	ngOnInit(): void {
	}
  
	login(email: any, password: any): Observable<BackendSuccessResponseWithData>  {
		const body = { email, password };
		console.log(body)
		return this.http.post<BackendSuccessResponseWithData>(`${environment.apiUrl}/user/login`, body);
	}

	signup(userData: any): Observable<BackendSuccessResponseWithoutData>  {
		const body =  userData;
		console.log(body)
		return this.http.post<BackendSuccessResponseWithoutData>(`${environment.apiUrl}/user/register`, body);
	}
  
	LoggedIn() {
		this.loggedIn = true;
		console.log("this.loggedIn",this.loggedIn)
	}

	isLoggedIn() {
		return this.loggedIn;
	}

	logout() {
		this.loggedIn = false;
		localStorage.removeItem('jwtToken');
		this.message = Messages.LOGOUT_SUCCESS
		alert(this.message)
		this.router.navigate(['/home']);
	}
}
