import { Response } from '@angular/http';
import { ItineraryService } from './services/itinerary.service';
import Itinerary from './models/itinerary.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    //Private itineraryservice will be injected into the component by Angular Dependency Injector
    private itineraryService: ItineraryService
  ) { }

  //Declaring the new itinerary Object and initilizing it
  public newItinerary: Itinerary = new Itinerary()

  //An Empty list for the visible itinerary list
  itinerarysList: Itinerary[];


  ngOnInit(): void {

    //At component initialization the 
    this.itineraryService.getItinerarys()
      .subscribe(itinerarys => {
        //assign the itinerarylist property to the proper http response
        this.itinerarysList = itinerarys
        console.log(itinerarys)
      })
  }
}