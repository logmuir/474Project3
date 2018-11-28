import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ItineraryService } from './Itinerary/services/itinerary.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from '../app-routing.module';
import { ItineraryDataComponent } from './views/itinerary-data/itinerary-data.component';
import { HomeComponent } from './views/home/home.component';
import { FoursquareService } from './Foursquare/services/foursquare.service';

import {TableModule} from 'ngx-easy-table';

@NgModule({
  declarations: [
    AppComponent,
    ItineraryDataComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    TableModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    ItineraryService, FoursquareService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }