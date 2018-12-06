import { Component, OnInit, OnChanges, } from '@angular/core';
import { AuthService } from './Auth0/auth.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  // styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Travel Express';
  profile: any;

  constructor(public authService: AuthService) {
    this.authService.handleAuthentication();
    this.authService.scheduleRenewal();
    console.log("Scheduled renewal!")
  }

  login(): void {
    this.authService.login();
  }

  logout(): void {
    this.authService.logout();
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  ngOnInit(): void {
  }
}