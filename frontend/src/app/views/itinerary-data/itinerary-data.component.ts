import { Component, OnInit } from '@angular/core';
import { FoursquareService } from '../../Foursquare/services/foursquare.service';
import 'rxjs/Rx';
import { Itinerary } from "../../Itinerary/models/itinerary.model";
import { TripEvent } from './../../TripEvent/models/tripEvent.model';
import { ItineraryService } from '../../Itinerary/services/itinerary.service'


@Component({
  selector: 'app-itinerary-data',
  templateUrl: './itinerary-data.component.html',
  styleUrls: ['./itinerary-data.component.css'],
  providers: [FoursquareService]
})
export class ItineraryDataComponent implements OnInit {
  public selectedEvent;
  tripEvent: TripEvent = null;
  all_tripEvents: TripEvent[] = [];
  public displayMessage = "Categories";
  public sortOptions = ["*", "Drinks", "Coffee", "Shops", "Arts", "Outdoors", "Sights", "Trending", "Top Picks"]
  public show: boolean = false;
  public buttonName: any = 'Show';
  lastAction: string;
  events: any = null;
  place: string = null;
  category: string = null;
  droppedItems: Object[] = [];

  constructor(private foursquareService: FoursquareService, private itineraryService: ItineraryService) { }

  ngOnInit() { }

  getEvents() {
    this.foursquareService
      .getAllNear(this.place, this.category)
      .subscribe(events => {
        this.events = events;
      });
  }

  getId() {
    //this.foursquareService.
  }

  onSearchButtonClick(stringToSearchFor: string): void {
    this.place = stringToSearchFor;
    this.show = true;
    this.getEvents();
  }

  onSaveButtonClick(): void {
    let generatedItinerary = this.generateItinerary();
    console.log(generatedItinerary)
    this.saveItinerary(generatedItinerary);

  }

  saveItinerary(itinerary: Itinerary): void {
    console.log(this.itineraryService.createItinerary(itinerary));
  }

  generateItinerary(): Itinerary {
    
    let tripEvents = this.generateTripEventsFromDroppedItems();


    let newItinerary = new Itinerary("Title Goes Here!", "Description goes here!", new Date( 2018, 1, 4), "Itinerary Status", tripEvents);

    return newItinerary;
  }

  generateTripEventsFromDroppedItems(): TripEvent[] {
    let tripEvents = new Array<TripEvent>();

    let currentIndex = 0;
    this.droppedItems.forEach(droppedItem => {
      tripEvents.push(new TripEvent(droppedItem["venue"]["name"], droppedItem["venue"]["location"]["formattedAddress"], currentIndex, "TripEvent Status"));

      currentIndex++;
    });

    return tripEvents;
  }

  onDropDownSelect(categoryToSearchFor: string) {
    this.displayMessage = categoryToSearchFor;
    this.category = categoryToSearchFor;
    return this.displayMessage;
  }

  drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  onItemDrop(e: any) {
    // Get the dropped data here
    this.droppedItems.push(e.dragData);
    //console.log("drag Data " + e.dragData);
    //console.log("dropepd Items " + this.droppedItems);
    //var t1 = new TripEvent(e.response.groups.items.venue.name, e.response.groups.items.venue.location.address, new Date(), "", 2);
    //console.log(t1);
    //this.setData(e.dragData);
  }

  // onItemDelete(e: any){
  //    var remove_index = this.droppedItems.indexOf(e.dragData);
  //    if(remove_index > -1){
  //      this.droppedItems.splice(remove_index, 1);
  //    }
  //   //  var remove_index = this.all_tripEvents.indexOf(e.dragData);
  //   //  if(remove_index > -1){
  //   //    this.all_tripEvents.splice(remove_index, 1);
  //   //  }
  //   //  console.log(this.all_tripEvents);
  // }

}

