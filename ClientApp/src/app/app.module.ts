import {BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from "@angular/router";
import {JwtModule} from '@auth0/angular-jwt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxGalleryModule} from 'ngx-gallery';

import { AppComponent } from './app.component';
import {NavComponent} from "./nav/nav.component";
import {RegisterComponent} from "./register/register.component";
import {HomeComponent} from "./home/home.component";
import {ErrorInterceptorProvider} from "./_services/error.interceptor";
import {MemberListComponent} from "./members/member-list/member-list.component";
import {ListsComponent} from "./lists/lists.component";
import {MessagesComponent} from './messages/messages.component';
import {appRoutes} from "./routes";
import { MemberCardComponent } from './members/member-card/member-card.component';
import { MemberDetailsComponent } from './members/member-details/member-details.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}

export class CustomHammerConfig extends HammerGestureConfig{
  overrides = {
    pinch: { enable: false },
    rotate: { enable: false }
  }
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RegisterComponent,
    HomeComponent,
    MemberListComponent,
    ListsComponent,
    MessagesComponent,
    MemberCardComponent,
    MemberDetailsComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    NgxGalleryModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:5001'],
        blacklistedRoutes: ['localhost:5001/auth']
      }
    }),
    NgbTabsetModule
  ],
  providers: [
    ErrorInterceptorProvider,
    {provide: HAMMER_GESTURE_CONFIG, useClass: HammerGestureConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
