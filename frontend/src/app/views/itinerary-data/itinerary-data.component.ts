import { Component, OnInit } from '@angular/core';
import { FoursquareService } from '../../Foursquare/services/foursquare.service';
import 'rxjs/Rx';
import { isArray } from 'util';

@Component({
  selector: 'app-itinerary-data',
  templateUrl: './itinerary-data.component.html',
  styleUrls: ['./itinerary-data.component.css'],
  providers: [FoursquareService]
})
export class ItineraryDataComponent implements OnInit {
  //public show:boolean = false;
  //public buttonName:any = 'Show';
  events:any[] = [];
  place: string = 'newark,de';

  p: number = 1;
  
  constructor(private foursquareService: FoursquareService) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.foursquareService
    .getAllNear(this.place)
      .subscribe(events => {
        console.log(events);
        this.events = events;
      });
  }

  //onSelect(foursquare: Foursquare): void{
  //}

  //onButtonClick(stringToSearchFor: string): void {
    //this.place = stringToSearchFor;
    //this.show = true;
    //this.getEvents();
    //console.log(stringToSearchFor)
  //}

}

