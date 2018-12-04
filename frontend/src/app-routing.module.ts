import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItineraryDataComponent } from './app/views/itinerary-data/itinerary-data.component';
import { HomeComponent } from './app/views/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ItineraryComponent } from './app/views/itinerary/itinerary.component';

const appRoutes: Routes = [
  { path: 'home',
    component: HomeComponent,
    data: {title: 'Home'}
  },
  {
    path: 'foursquare',
    component: ItineraryDataComponent,
    data: { title: 'Foursquare List' }
  },
  {
    path: 'itinerary',
    component: ItineraryComponent,
    data: {title: 'Itinerary DB'}
  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes), CommonModule],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
