import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: any, password: any) {
    const body = { username, password };
    console.log(body)
    return this.http.post(`/login`, body);
  }

  signup(userData: any) {
    const body = { userData };
    console.log(body)
    return this.http.post(`/login`, body);
  }
}
