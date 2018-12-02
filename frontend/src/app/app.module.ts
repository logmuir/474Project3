import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ItineraryService } from './Itinerary/services/itinerary.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from '../app-routing.module';
import { ItineraryDataComponent } from './views/itinerary-data/itinerary-data.component';
import { HomeComponent } from './views/home/home.component';
import { FoursquareService } from './Foursquare/services/foursquare.service';
import { ItineraryComponent } from './views/itinerary/itinerary.component';
//import { MatCheckboxModule } from '@angular/material';
// import {
//   MatButtonModule,
//   MatToolbarModule,
//   MatIconModule,
//   MatCardModule,
//   MatCheckboxModule,
//   MatRadioModule,
//   MAT_CHECKBOX_CLICK_ACTION,
//   MatListModule,
//   } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MdCheckboxModule } from '@angular/material';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    ItineraryDataComponent,
    HomeComponent,
    ItineraryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    //MdCheckboxModule,
    ReactiveFormsModule
  ],
  providers: [
    ItineraryService, FoursquareService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }