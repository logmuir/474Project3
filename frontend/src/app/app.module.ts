import { FormsModule } from '@angular/forms';
import { CustomMaterialModule } from './core/material.module';
// import { AppRoutingModule } from './core/app.routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ItineraryService } from './services/itinerary.service';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { LoginComponent } from './login/login.component';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
    // AppComponent,
    // LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CustomMaterialModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [
    ItineraryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }