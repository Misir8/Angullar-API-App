import {Component, OnInit} from '@angular/core';
import {AuthService} from "./_services/auth.service";
import {Local} from "protractor/built/driverProviders";
import {JwtHelperService} from "@auth0/angular-jwt";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  title = 'app';
  jwtHelper = new JwtHelperService();
  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token){
      this.authService.decodedToken = this.jwtHelper.decodeToken(token);
    }
  }
}
