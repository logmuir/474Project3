import { NgModule } from '@angular/core';
import { LoginComponent } from './app/login/login.component';
import { CommonModule } from '@angular/common';
import { ItineraryDataComponent } from './app/views/itinerary-data/itinerary-data.component';
import { HomeComponent } from './app/views/home/home.component'
import { RouterModule, Routes } from '@angular/router';
import { ItineraryComponent } from './app/views/itinerary/itinerary.component';
import { AboutComponent } from './app/about/about.component';
<<<<<<< HEAD
import { ContactusComponent } from './app/contactus/contactus.component';

const routes: Routes = [
  // { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'contactus', component: ContactusComponent },
=======

const routes: Routes = [
>>>>>>> 9b5d0eb4df28a938487122e78ced9f1570f01b88

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
    path: 'login',
    component: LoginComponent
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
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]

})
export class AppRoutingModule { }
