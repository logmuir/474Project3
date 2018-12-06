import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItineraryDataComponent } from './app/views/itinerary-data/itinerary-data.component';
import { HomeComponent } from './app/views/home/home.component'
import { RouterModule, Routes } from '@angular/router';
import { ItineraryComponent } from './app/views/itinerary/itinerary.component';
import { AboutComponent } from './app/about/about.component';
import { ContactusComponent } from './app/contactus/contactus.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'itineraryBuilder',
    component: ItineraryDataComponent,
    data: { title: 'Itinerary Builder' }
  },
  {
    path: 'myItineraries',
    component: ItineraryComponent,
    data: { title: 'My Itineraries' }
  },
  {
    path: 'about',
    component: AboutComponent
  },

  {
    path: 'contactus',
    component: ContactusComponent
  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]

})
export class AppRoutingModule { }
