import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {Local} from "protractor/built/driverProviders";
import {throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = "https://localhost:5001/auth/";

  constructor(private http: HttpClient) {
  }

  login(model: any) {
    return this.http.post(this.baseUrl + "login", model)
      .pipe(
        map((response: any) => {
          const user = response;
          if (user){
            localStorage.setItem("token", user.token);
          }
        })
      )
  }
  register(model: any){
    return this.http.post(this.baseUrl + 'register', model);
  }
}
