import { Component, OnInit } from '@angular/core';
import {AuthService} from './Auth0/auth.service';
  import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  // styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Travel Express';


  constructor(  
    private authService : AuthService
  ) { }

  login(): void{
    this.authService.login();
  }

  ngOnInit(): void {
  }
}
