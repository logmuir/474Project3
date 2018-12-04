import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ItineraryService } from './Itinerary/services/itinerary.service';
import { AppRoutingModule } from '../app-routing.module';
import { CustomMaterialModule } from './core/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ItineraryDataComponent } from './views/itinerary-data/itinerary-data.component';
import { FoursquareService } from './Foursquare/services/foursquare.service';
import { ItineraryComponent } from './views/itinerary/itinerary.component';
import { TripEventComponent } from './views/trip-event/trip-event.component';
import { NgDragDropModule } from 'ng-drag-drop';
import 'hammerjs';
import { AuthService } from './Auth0/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ItineraryDataComponent,
    HomeComponent,
    ItineraryComponent,
    TripEventComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CustomMaterialModule,
    FormsModule,
    NgbModule.forRoot(),
    NgDragDropModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    ItineraryService, FoursquareService, AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }