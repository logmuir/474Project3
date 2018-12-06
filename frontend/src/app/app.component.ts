import { Component, OnInit, OnChanges,  } from '@angular/core';
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

  ngOnInit(): void{
    this.authService.profChanges.subscribe(any => this.profile = any);
    console.log(this.profile); 
  }



}
