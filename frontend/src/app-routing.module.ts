import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { FoursquareComponent } from '../src/app/models/foursquare/foursquare.component';
import { ItineraryDataComponent } from './app/views/itinerary-data/itinerary-data.component';
import { HomeComponent } from './app/views/home/home.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'home',
    component: HomeComponent,
    data: {title: 'Home'}
  },
  {
    path: 'itinerary-data',
    component: ItineraryDataComponent,
    data: { title: 'Foursquare List' }
  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes), CommonModule],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
