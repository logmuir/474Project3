import { Component, OnInit, OnChanges } from '@angular/core';
import {AuthService} from './Auth0/auth.service';
  import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  // styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {

  title = 'Travel Express';
  profile: any;

  constructor(  
    private authService : AuthService
  ) { 
    this.authService.handleAuthentication();
  }

  login(): void{
    this.authService.login();
  }

  logout(): void{
    this.authService.logout();
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  ngOnChanges() :void {
  }

  ngOnInit(): void{
    if (this.authService.userProfile) {
      this.profile = this.authService.userProfile;
    } else {
      this.authService.getProfile((err, profile) => {
        this.profile = profile;
      });
    }
  }


}
