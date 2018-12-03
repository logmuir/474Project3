import { FormsModule } from '@angular/forms';
import { CustomMaterialModule } from './core/material.module';
import { AppRoutingModule } from './core/app.routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { ItineraryService } from './services/itinerary.service';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CustomMaterialModule,
    FormsModule,
    NgbModule.forRoot(), 
    AppRoutingModule
  ],
  providers: [
    // ItineraryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }