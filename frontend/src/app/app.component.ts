import Itinerary from './Itinerary/models/itinerary.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Travel Express';

  constructor(
  ) { }

  //Declaring the new itinerary Object and initilizing it
  public newItinerary: Itinerary = new Itinerary()

  //An Empty list for the visible itinerary list
  itinerarysList: Itinerary[];
  editItinerarys: Itinerary[] = [];


  create() {
  }
  
  ngOnInit(): void {
  }
}